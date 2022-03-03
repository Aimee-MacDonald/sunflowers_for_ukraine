import React from 'react'

import SFU from '../contractInterfaces/SFUInterface'
import './Mint.sass'

const Mint = () => {
  const sfu = new SFU()

  const mint = e => {
    e.preventDefault()

    const address = e.target.address.value

    sfu.mint(address)
      .then(transaction => transaction.wait())
      .then(result => console.log(result.events))
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={mint} id='Mint'>
      <p>Mint: </p>
      <input id='address' placeholder='address' />
      <button type='submit'>Mint</button>
    </form>
  )
}

export default Mint