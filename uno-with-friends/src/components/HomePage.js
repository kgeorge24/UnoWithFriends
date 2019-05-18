import React, { Component } from 'react'
import '../css/HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="logo-container">
          <img src={require('../img/uno-logo.png')} alt="" />
        </div>
        <div className="game-mode-container">
          <button className="game-mode">Solo</button>
          <button className="game-mode">Multiplayer</button>
        </div>
      </div>
    )
  }
}
