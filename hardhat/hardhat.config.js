require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
PRIVATE_KEY = process.env.PRIVATE_KEY;
ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
API_KEY = process.env.API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
    networks: {
        mumbai: {
            chainId: 80001,
            url: MUMBAI_RPC_URL,
            accounts: [PRIVATE_KEY]
        },
        sepolia: {
            chainId: 11155111,
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
};
