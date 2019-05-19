import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../css/Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <h1>Uno With Friends</h1>
        <Menu>
          <div className="username-container">
            <h3>Username</h3>
            <span id="username">VitoGrand24</span>{' '}
            <span id="online-status">ONLINE</span>
          </div>
          <div className="friends-list-container">
            <h3>Username</h3>
          </div>
          <a id="signin" className="menu-item" href="/signin">
            Sign In
          </a>
          <a id="register" className="menu-item" href="/register">
            Register
          </a>
        </Menu>
      </div>
    )
  }
}
