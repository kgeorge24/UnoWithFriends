import React from 'react'
import './css/App.css'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <HomePage /> */}
      <Game />
    </div>
  )
}

export default App
