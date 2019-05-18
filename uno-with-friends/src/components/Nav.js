import React, { Component } from 'react'
import { elastic as Menu } from 'react-burger-menu'
import '../css/Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <h1>Uno With Friends</h1>
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
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
