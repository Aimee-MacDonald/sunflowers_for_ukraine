const hre = require('hardhat')

async function main() {
  const SFU = await hre.ethers.getContractFactory('SFU')
  const sfu = await SFU.deploy()
  await sfu.deployed()

  console.log(`Sunflowers for Ukraine deployed to: ${sfu.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })