import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";

describe("AMM TESTING", function () {
  before(async function () {
    let [OWNER, ALICE, BOB] = await ethers.getSigners();

    it("Should deploy Token1 and Token2 and Mint new tokens to Deployer", async () => {
      const TokenContract = await ethers.getContractFactory("MyToken");
      const Token1 = await TokenContract.deploy();
      await Token1.deployed();
      const Token2 = await TokenContract.deploy();
      await Token2.deployed();
      console.log(Token1.address, Token2.address);
    });
  });
});
