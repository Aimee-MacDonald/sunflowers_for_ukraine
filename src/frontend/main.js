import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './main.sass'

import Mint from './Mint/Mint'

const Main = () => {
  return (
    <div id='Main'>
      <h1>Sunflowers for Ukraine</h1>
      <Mint/>
    </div>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'))