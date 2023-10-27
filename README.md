# Introduction
This repo is a fullstack simple voting dapp made for an assignment in my blockchain course. It is divided into 2 directories (hardhat and frontend).
The frontend directory is for the interface of the dapp and the hardhat directory is for the smart contract.

For the smart contract, the Hardhat framework was used with one contract in the contracts directory (Voting.sol).
For the front end interface, it uses plain HTML, CSS, JS, along with a http-server to emulate a live server.

# Installation
To install and execute this project, do the following steps: 
## 1. Clone the repo
```git clone git@github.com:Shobhit-Nagpal/voting-dapp.git```
## 2. Install dependencies
Go to the separate directories and execute the following command:
```npm install```
## 3. Deploy contract
We keep track of the owner of the contract in Voting.sol, so if you try to directly execute the frontend, it won't work.
To deploy your own contract, do the following:
### 1. Make a .env file
Make an .env file in the hardhat directory where you'll store your private keys, RPC URLs, etc.
```touch .env```
### 2. Add relevant details
We will use the Sepolia testnet to deploy the contract. Hence, you would need:
1. METAMASK PRIVATE KEY
2. SEPOLIA RPC URL (Recommended to get the RPC URL from Alchemy)
3. ETHERSCAN API KEY
### 3. Deploy your contract
```npx hardhat run scripts/deploy.js --network sepolia```
This will log the address of the contract on the test network and generate the ABI of the contract in the artifacts directory.. Copy the contract address and save it for later use.
### 4. Verify the contract
```npx hardhat verify --network sepolia <CONTRACT_ADDRESS>```
## 4. Replace contract address and ABI
Navigate to the frontend directory and open the script.js file. Replace the contractAddress variable with your deployed contract's address.
Replace the contractABI variable with the ABI of your deployed contract. You can find the ABI of your contract in hardhat/artifacts/contracts/Voting.sol/Voting.json
## 5. Run the dapp
Navigate to the frontend directory and run the command:
```npx http-server```
This will boot up a live server with the index.html file.
Note: If you use Brave browser and are noticing that the changes to the JS files don't reflect on the live server. You can try the following:
### 1. Kill the server after any changes
Do a Ctrl + C to kill the server.
### 2. Run server again
Execute the command:
```npx http-server```
### 3. Clear cache on browser
Go to Brave settings and navigate to the tab of clearing cache. Select the option to clear the cache and click "Clear"
### 4. Visit your site
You can now visit the site and reload a few times for Brave to get the updated files.


# Conclusion
Thanks!
