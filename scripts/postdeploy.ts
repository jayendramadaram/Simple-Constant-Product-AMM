import "@nomiclabs/hardhat-ethers";
import { AMM, MyToken } from "../types";
import { ethers } from "hardhat";
import AMM_ABI from "../artifacts/contracts/AMM.sol/AMM.json";
import TOKEN_ABI from "../artifacts/contracts/Token.sol/MyToken.json";

let _AMM: AMM;
let _Token1: MyToken;
let _Token2: MyToken;

async function main() {
  const accounts = await ethers.getSigners();
  const deployerAddress = accounts[0].address;
  console.log(`Deployer address: ${deployerAddress}`);

  let _AMM = (await ethers.getContractAt(
    AMM_ABI["abi"],
    "0x74c63B8e62b22E365Cca42A74E510d6c4F102AFb"
  )) as AMM;

  let _Token1 = (await ethers.getContractAt(
    TOKEN_ABI["abi"],
    "0x165deEe517c585c492903A8543f8BE464e789c18"
  )) as MyToken;
  let _Token2 = (await ethers.getContractAt(
    TOKEN_ABI["abi"],
    "0x1D4d09F552812F108a53075976b82FAFAe3869C7"
  )) as MyToken;

  await _Token1.mint(deployerAddress, 100000);
  await _Token2.mint(deployerAddress, 100000);

  console.log(await _Token1.balanceOf(deployerAddress));
  console.log(await _Token2.balanceOf(deployerAddress));
  //   return;
  console.log(await _AMM.PoolStats());

  await _Token1.approve(_AMM.address, 1000);
  await _Token2.approve(_AMM.address, 1000);
  console.log("We are here");

  await _AMM.addLiquidity(1000, 1000);

  console.log(await _AMM.PoolStats());
  return;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
