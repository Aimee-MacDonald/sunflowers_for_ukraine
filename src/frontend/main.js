import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import Mint from './Mint/Mint'

const Main = () => {
  return (
    <div id='Main'>
      <div id='heading'>
        <h1>Mint a Sunflower NFT</h1>
        <h2>Donations go directly to support Ukraine</h2>
      </div>
      <Mint/>
    </div>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'))