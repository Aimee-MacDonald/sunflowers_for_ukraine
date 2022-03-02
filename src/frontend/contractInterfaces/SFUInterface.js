import BaseInterface from './BaseInterface'
import SFU from '../artifacts/src/blockchain/contracts/SFU.sol/SFU.json'
import { ethers } from 'ethers'

export default class SFUInterface extends BaseInterface {
  constructor() {
    super('0x17B429c89DAeDa0E98F1AB3BbEb3D9E9ef550d8f', SFU.abi)
  }

  mint(address) {
    if(super.ethCheck) {
      const value = 0.035
          
      return super.getContract(true)
        .then(contract => contract.mint(address, {value: ethers.utils.parseEther(`${value}`)}))
    }
  }
}