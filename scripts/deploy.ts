
import "@nomiclabs/hardhat-ethers";
import { AMMFACTORY } from "../types";
import { ethers } from "hardhat";

let AMM_FACTORY: AMMFACTORY

async function main() {
  // console.log((process.env.INFURA_ID, process.env.PRIV_KEY));

  let Factory = await ethers.getContractFactory('AMMFACTORY')
  AMM_FACTORY = await Factory.deploy() as AMMFACTORY;
  await AMM_FACTORY.deployed()
  console.log(AMM_FACTORY.address);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });