require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  accounts.forEach(account => console.log(account.address))
})

module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: './src/blockchain/contracts',
    cache: './src/blockchain/cache',
    artifacts: './src/frontend/artifacts',
    tests: './tests/blockchain'
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}