import BaseInterface from './BaseInterface'
import SFU from '../artifacts/src/blockchain/contracts/SFU.sol/SFU.json'
import { ethers } from 'ethers'

export default class SFUInterface extends BaseInterface {
  constructor() {
    super('0x146fd2459C927301873e72D54FcA6FdD17263A26', SFU.abi)
  }

  mint(address) {
    if(super.ethCheck) {
      const value = 0.035
          
      return super.getContract(true)
        .then(contract => contract.mint(address, {value: ethers.utils.parseEther(`${value}`)}))
    }
  }

  totalSupply() {
    if(super.ethCheck) {
      return super.getContract()
        .then(contract => contract.totalSupply())
    }
  }
}