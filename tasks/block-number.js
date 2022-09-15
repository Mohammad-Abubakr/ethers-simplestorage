const { task } = require("hardhat/config")

task("block-number", "for printing the block numbers").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current BlockNumber:${blockNumber}`)
    }
)
