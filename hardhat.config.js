require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHER_SCAN_API = process.env.ETHERSCAN_API
const CMC_API = process.env.CMC_API
module.exports = {
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHER_SCAN_API,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        currency: "USD",
        noColors: true,
        coinmarketcap: CMC_API,
    },

    solidity: "0.8.9",
}
