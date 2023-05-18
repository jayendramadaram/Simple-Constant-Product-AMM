import { expect } from "chai";
import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";
import { AMM, AMMFACTORY, MyToken } from "../types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import AMM_ABI from "../artifacts/contracts/AMM.sol/AMM.json";

describe("AMM TESTING", function () {
  let Token1: MyToken;
  let Token2: MyToken;
  let AMM: AMM;
  let OWNER: SignerWithAddress;

  before(
    "Should deploy Token1 and Token2 and Mint new tokens to Deployer",
    async () => {
      [OWNER] = await ethers.getSigners(); // Signers
      const TokenContract = await ethers.getContractFactory("MyToken"); // Contract Instance

      Token1 = (await TokenContract.deploy()) as MyToken; // Initate deployment
      await Token1.deployed();
      Token2 = (await TokenContract.deploy()) as MyToken;
      await Token2.deployed();

      expect(await Token1.balanceOf(OWNER.address)).to.be.equal(
        1000000000000000000000000n
      );
      expect(await Token2.balanceOf(OWNER.address)).to.be.equal(
        1000000000000000000000000n
      );
    }
  );

  it("Init AMM and Check for INIT state", async () => {
    let [OWNER, ALICE, BOB] = await ethers.getSigners();

    let AMM_FACTORY = await ethers.getContractFactory("AMM");
    AMM = (await AMM_FACTORY.deploy(Token1.address, Token2.address)) as AMM;
    await AMM.deployed();

    expect((await AMM.PoolStats())[0]).to.be.equal(0n);
    expect(await AMM.totalShares()).to.be.equal(0n);
  });

  it("should be able to add liquidity to AMM contract", async () => {
    let [OWNER, ALICE, BOB] = await ethers.getSigners();

    await Token1.approve(AMM.address, 1000);
    await Token2.approve(AMM.address, 1000);

    await AMM.addLiquidity(1000, 1000);

    expect(await AMM.Kval()).to.be.equal(1000n * 1000n);
    expect(await AMM.totalShares()).to.be.equal(1_000_000 * 100);
    expect(await AMM.shares(OWNER.address)).to.be.equal(
      await AMM.totalShares()
    );
    expect(await AMM.totalToken1())
      .to.be.equal(await AMM.totalToken2())
      .to.be.equal(1000n);
  });

  it("Testing second Addition of liquidity", async () => {
    // let [OWNER] = await ethers.getSigners();

    await expect(AMM.addLiquidity(2000, 2000)).to.be.reverted;

    await Token1.approve(AMM.address, 1000);
    await Token2.approve(AMM.address, 1000);

    await AMM.addLiquidity(1000, 1000);

    expect(await AMM.totalToken1())
      .to.be.equal(await AMM.totalToken2())
      .to.be.equal(2000n);
    expect(await AMM.Kval()).to.be.equal(2000n * 2000n);
    expect(await AMM.totalShares()).to.be.equal(1_000_000 * 100 * 2);
    expect(await AMM.shares(OWNER.address)).to.be.equal(
      await AMM.totalShares()
    );
  });

  it("Withdraw half of shares suplied", async () => {
    let Token1_balance = await Token1.balanceOf(OWNER.address);
    let Token2_balance = await Token2.balanceOf(OWNER.address);
    // console.log(Token1_balance);
    // console.log(await AMM.getWithdrawEstimate(100000000));
    // console.log(await AMM.totalToken1());
    // console.log(await AMM.totalToken2());
    // console.log(await AMM.totalShares());
    // console.log(await AMM.shares(OWNER.address));

    await AMM.withdrawLiquidity(100000000);

    expect(await Token1.balanceOf(OWNER.address))
      .to.be.equal(Token1_balance.add(1000))
      .to.be.equal(await Token2.balanceOf(OWNER.address));
    expect(await AMM.Kval()).to.be.equal(1000n * 1000n);
    expect(await AMM.totalShares()).to.be.equal(1_000_000 * 100);
  });

  it("Intiate Swaps", async () => {
    // let Token1_balance = await Token1.balanceOf(OWNER.address)
    // console.log(await AMM.Kval());

    expect(await AMM.estimateToken2GivenToken1(50)).to.be.equal(48);
    expect(await AMM.estimateToken1GivenToken2(50)).to.be.equal(48);
  });

  it("Attempt Swaps", async () => {
    await Token1.approve(AMM.address, 50);
    await Token2.approve(AMM.address, 50);
    await AMM.swapToken1(50);

    expect(await AMM.Kval()).to.be.equal(1000n * 1000n);
    await AMM.swapToken2(50);

    expect(await AMM.Kval()).to.be.equal(1000n * 1000n);
    // console.log(await AMM.PoolStats());
  });

  it("Should deploy Factory can Still new Pool should function", async () => {
    let Factory = await ethers.getContractFactory("AMMFACTORY");
    let AMM_FACTORY: AMMFACTORY = (await Factory.deploy()) as AMMFACTORY;
    await AMM_FACTORY.deployed();

    let tx = await AMM_FACTORY.CreatePool(Token1.address, Token1.address);
    await tx.wait();
    let eventFilter = AMM_FACTORY.filters.PoolCreated(null, null);
    let events = await AMM_FACTORY.queryFilter(eventFilter);

    let _AMM = events[0]["args"][0];

    let contract: AMM = new ethers.Contract(
      _AMM,
      AMM_ABI["abi"],
      ethers.provider
    ) as AMM;

    expect(await contract.Kval()).to.be.equal(0);
    expect(await contract.totalShares()).to.be.equal(0);
  });
});

// FACTORY ADD FUJI TESTNET --> 0x2A9011Ec7d90721Cb6d6E7C222177D9E97C0CfA4
