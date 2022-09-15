const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", () => {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with the favourite number of 0", async function () {
        const currentValue = simpleStorage.retrieve()
        const expetedValue = "0"
        assert(currentValue.toString(), expetedValue)
    })

    it("should update when called store ", async function () {
        const expectedValue = "2"
        simpleStorage.store(2)
        const storedValue = simpleStorage.retrieve()
        assert(storedValue.toString, expectedValue)
    })
})
