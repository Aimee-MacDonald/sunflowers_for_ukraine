const { expect } = require('chai')

describe('Sunflowers for Ukraine', () => {
  let signers, sfu

  beforeEach(async () => {
    signers = await ethers.getSigners()

    const SFU = await ethers.getContractFactory('SFU')
    sfu = await SFU.deploy()
  })

  it('Should mint a new Sunflower', async () => {
    expect(await sfu.balanceOf(signers[0].address)).to.equal(0)
    
    await sfu.mint(signers[0].address, {value: ethers.utils.parseEther('0.035')})
    
    expect(await sfu.balanceOf(signers[0].address)).to.equal(1)
  })

  it('Should returned the total minted', async () => {
    expect(await sfu.totalSupply()).to.equal(0)
    
    await sfu.mint(signers[0].address, {value: ethers.utils.parseEther('0.035')})
    
    expect(await sfu.totalSupply()).to.equal(1)
  })

  it('Should cost 0.035 ETH to mint', async () => {
    expect(sfu.mint(signers[0].address)).to.be.revertedWith('SFU: Requires 0.035 ETH')
  })

  it('Should forward all funds immediately', async () => {
    expect(await ethers.provider.getBalance(sfu.address)).to.equal('0')
    expect(await ethers.provider.getBalance('0x165CD37b4C644C2921454429E7F9358d18A45e14')).to.equal('35000000000000000')
  })
  
  it('Should return the sunflower metadata', async () => {
    expect(await sfu.tokenURI(0)).to.equal("ipfs://QmcX2yikrkhWHfRpezS4naPk1ikNyGBeM4BEaLqawCfPmx/")
  })
})