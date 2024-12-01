import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
const ALCHEMY_API_KEY_SEPOLIA=process.env.ALCHEMY_API_KEY_SEPOLIA || "";
const ETHERSCAN_API_KEY= process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks:{
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY_SEPOLIA}`,
      accounts:[process.env.PRIVATE_KEY_SEPOLIA || ""]
    }
  },

  etherscan:{
    apiKey: {
      sepolia: ETHERSCAN_API_KEY
    }
  }
};

//minito 2 parte 2

export default config;
