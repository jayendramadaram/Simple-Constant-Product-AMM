import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
  },
  gasReporter: {
    // enabled: true,
  },
  solidity: {
    compilers: [{ version: "0.8.9", settings: {} }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  mocha: {
    timeout: 20000,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
};

export default config;
