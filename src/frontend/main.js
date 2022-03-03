import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import Mint from './Mint/Mint'
import SFU from './contractInterfaces/SFUInterface'

const Main = () => {
  const sfu = new SFU()
  const [ sunflowerCount, setSunflowerCount ] = useState(0)

  useEffect(() => {
    sfu.totalSupply()
      .then(result => setSunflowerCount(result))
      .catch(error => console.log(error))
  }, [])

  return (
    <div id='Main'>
      <h1>{`${sunflowerCount} Sunflowers minted for Ukraine`}</h1>
      <Mint/>
    </div>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'))