// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const votingContract = await hre.ethers.getContractFactory("Voting")
    const deployingVotingContract = await votingContract.deploy()

    console.log(`Contract address of Voting contract: ${deployingVotingContract.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//MUMBAI
//Contract address deployed: 0xc69Fa21e25A5004db45927Ca15626da7a907e86F
//https://mumbai.polygonscan.com/address/0xc69Fa21e25A5004db45927Ca15626da7a907e86F#code


// SEPOLIA
// Contract address deployed: 0x4fdD80178179Ea34cdC2E3A89A5A2814D1e2558B 
//https://sepolia.etherscan.io/address/0x4fdD80178179Ea34cdC2E3A89A5A2814D1e2558B#code
