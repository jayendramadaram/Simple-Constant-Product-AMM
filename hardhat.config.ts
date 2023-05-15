import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// require("@nomiclabs/hardhat-waffle");
import 'dotenv/config';
require("@nomiclabs/hardhat-ethers");

// console.log(process.env.INFURA_ID);


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [
        `${process.env.PRIV_KEY}`
      ],
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [
        `${process.env.PRIV_KEY}`
      ],
    },

  },
  gasReporter: {
    enabled: true,
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
  etherscan: {
    apiKey: "YGXM458QYWHHXIBE3GJBR3CGWQ179KDJXI"
  },

};

export default config;
