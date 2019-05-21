import React, { Component } from 'react'
import '../css/Game.css'

export default class Game extends Component {
  state = {
    players: []
  }

  componentDidMount = () => {}

  render() {
    return (
      <div className="game">
        <div className="center-content-container">
          <div className="card" />
        </div>

        <div className="center-content-container shorter">
          <div className="card smaller spacing" />
          <div className="card smaller spacing" />
          <div className="card smaller spacing" />
          <div className="card smaller spacing" />
          <div className="card smaller spacing" />
          <div className="card smaller spacing" />
          <div className="card smaller spacing" />
        </div>
      </div>
    )
  }
}
