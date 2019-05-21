import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../css/Nav.css'

export default class Nav extends Component {
  state = {
    friends: [
      { name: 'gangsta2344' },
      { name: 'Chiefmaster' },
      { name: 'fornitequeen' },
      { name: 'basher474' }
    ]
  }

  getFriends = () => {
    let { friends } = this.state
    let newFreinds = friends.map(friend => {
      // console.log(friend.name)
      return (
        <p key={friend.name}>
          <span id="username">{friend.name}</span>{' '}
          <span id="online-status">ONLINE</span>
        </p>
      )
    })

    return newFreinds
  }

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
            <h3>Friends</h3>
            {this.getFriends()}
          </div>
          <div />
        </Menu>
      </div>
    )
  }
}
