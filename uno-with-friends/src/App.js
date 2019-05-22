import React from 'react'
import './css/App.css'
import Nav from './components/Nav'
// import HomePage from './components/HomePage'
import GameBoard from './components/GameBoard'

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <HomePage /> */}
      <GameBoard />
    </div>
  )
}

export default App
