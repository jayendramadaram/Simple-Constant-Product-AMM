import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";
import { MyToken } from "../typechain-types";

describe("AMM TESTING", function () {
  let Token1: MyToken;
  let Token2: MyToken;

  before(
    "Should deploy Token1 and Token2 and Mint new tokens to Deployer",
    async () => {
      let [OWNER, ALICE, BOB] = await ethers.getSigners();

      const TokenContract = await ethers.getContractFactory("MyToken");
      Token1 = (await TokenContract.deploy()) as MyToken;
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

  it("Can i use ALice", async () => {
    // ALICE
    let [OWNER, ALICE, BOB] = await ethers.getSigners();
  });
});
