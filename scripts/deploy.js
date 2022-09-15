const { ethers, run, network } = require("hardhat")

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying Contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    console.log(`Deployed contract to : ${simpleStorage.address}`)
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API) {
        await simpleStorage.deployTransaction.wait(2)
        await verify(simpleStorage.address, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log(`Current Value is :${currentValue}`)

    const transactionReceipt = await simpleStorage.store(7)
    await transactionReceipt.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated value is :${updatedValue}`)
}

async function verify(contractAddress, args) {
    console.log("Verifying Contract")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Alraedy verified")
        } else {
            console.log(e)
        }
    }
}

main()
