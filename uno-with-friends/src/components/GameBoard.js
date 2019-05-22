import React, { Component } from 'react'
import '../css/Game.css'
import { Game, Colors, Values } from 'uno-engine'

export default class GameBoard extends Component {
  state = {
    players: ['kyle', 'shemar'],
    currentPlayer: '',
    hand: [],
    discardedCard: {}
  }

  componentDidMount = () => {
    this.startGame()
  }

  startGame = () => {
    let game = new Game(this.state.players)
    //   starts game with players. Deals 7 cards to each, first card is randomly chosen and person randomly starts first.
    const currentPlayer = game.currentPlayer
    // debugger

    const cardOnPile = game.discardedCard //  Card on top of the pile.
    this.setState({ currentPlayer, discardedCard: cardOnPile })

    // NUMERICAL VALUES FOR CARD ON TOP OF PILE
    const cardColorValue = cardOnPile.color //  Numerical value to cards color.
    const cardValue = cardOnPile.value // Numerical value to cards number

    // STRING VALUES FOR CARD ON TOP OF PILE
    const cardColor = Colors[cardColorValue] // String of cards color
    const cardName = Values[cardValue] //  String of cards number or symbol.

    // debugger

    this.storeHandToState(currentPlayer.hand)
    // debugger
  }

  storeHandToState = hand => {
    // console.log(hand[0], Colors[hand[0].color], Values[hand[0].value])

    this.setState({ hand: hand }, () =>
      this.convertHandValuesToString(this.state.hand)
    )
  }

  convertHandValuesToString = hand => {
    let newHand = hand.map(card => {
      console.log(card)
      return {
        value: Values[card.value],
        color: Colors[card.color]
      }
    })

    console.group('Hand in Strings')
    console.log(newHand)

    console.group('Hand in Values')
    console.log(hand)
  }

  showCards = (hand, className) => {
    return hand.map(card => {
      console.log(card.value, card.color)

      if (card.value === 0 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_0.png')} alt="" />
          </div>
        )
      } else if (card.value === 0 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_0.png')} alt="" />
          </div>
        )
      } else if (card.value === 0 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_0.png')} alt="" />
          </div>
        )
      } else if (card.value === 0 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_0.png')} alt="" />
          </div>
        )
      } else if (card.value === 1 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_1.png')} alt="" />
          </div>
        )
      } else if (card.value === 1 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_1.png')} alt="" />
          </div>
        )
      } else if (card.value === 1 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_1.png')} alt="" />
          </div>
        )
      } else if (card.value === 1 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_1.png')} alt="" />
          </div>
        )
      } else if (card.value === 2 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_2.png')} alt="" />
          </div>
        )
      } else if (card.value === 2 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_2.png')} alt="" />
          </div>
        )
      } else if (card.value === 2 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_2.png')} alt="" />
          </div>
        )
      } else if (card.value === 2 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_2.png')} alt="" />
          </div>
        )
      } else if (card.value === 3 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_3.png')} alt="" />
          </div>
        )
      } else if (card.value === 3 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_3.png')} alt="" />
          </div>
        )
      } else if (card.value === 3 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_3.png')} alt="" />
          </div>
        )
      } else if (card.value === 3 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_3.png')} alt="" />
          </div>
        )
      } else if (card.value === 4 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_4.png')} alt="" />
          </div>
        )
      } else if (card.value === 4 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_4.png')} alt="" />
          </div>
        )
      } else if (card.value === 4 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_4.png')} alt="" />
          </div>
        )
      } else if (card.value === 4 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_4.png')} alt="" />
          </div>
        )
      } else if (card.value === 5 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_5.png')} alt="" />
          </div>
        )
      } else if (card.value === 5 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_5.png')} alt="" />
          </div>
        )
      } else if (card.value === 5 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_5.png')} alt="" />
          </div>
        )
      } else if (card.value === 5 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_5.png')} alt="" />
          </div>
        )
      } else if (card.value === 6 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_6.png')} alt="" />
          </div>
        )
      } else if (card.value === 6 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_6.png')} alt="" />
          </div>
        )
      } else if (card.value === 6 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_6.png')} alt="" />
          </div>
        )
      } else if (card.value === 6 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_6.png')} alt="" />
          </div>
        )
      } else if (card.value === 7 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_7.png')} alt="" />
          </div>
        )
      } else if (card.value === 7 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_7.png')} alt="" />
          </div>
        )
      } else if (card.value === 7 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_7.png')} alt="" />
          </div>
        )
      } else if (card.value === 7 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_7.png')} alt="" />
          </div>
        )
      } else if (card.value === 8 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_8.png')} alt="" />
          </div>
        )
      } else if (card.value === 8 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_8.png')} alt="" />
          </div>
        )
      } else if (card.value === 8 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_8.png')} alt="" />
          </div>
        )
      } else if (card.value === 8 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_8.png')} alt="" />
          </div>
        )
      } else if (card.value === 9 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_9.png')} alt="" />
          </div>
        )
      } else if (card.value === 9 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_9.png')} alt="" />
          </div>
        )
      } else if (card.value === 9 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_9.png')} alt="" />
          </div>
        )
      } else if (card.value === 9 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_9.png')} alt="" />
          </div>
        )
      } else if (card.value === 10 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_picker.png')} alt="" />
          </div>
        )
      } else if (card.value === 10 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_picker.png')} alt="" />
          </div>
        )
      } else if (card.value === 10 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_picker.png')} alt="" />
          </div>
        )
      } else if (card.value === 10 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_picker.png')} alt="" />
          </div>
        )
      } else if (card.value === 11 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_reverse.png')} alt="" />
          </div>
        )
      } else if (card.value === 11 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_reverse.png')} alt="" />
          </div>
        )
      } else if (card.value === 11 && card.color === 3) {
        return (
          <div className={className}>
            <img
              src={require('../img/uno-sprites/yellow_reverse.png')}
              alt=""
            />
          </div>
        )
      } else if (card.value === 11 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_reverse.png')} alt="" />
          </div>
        )
      } else if (card.value === 12 && card.color === 1) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/blue_skip.png')} alt="" />
          </div>
        )
      } else if (card.value === 12 && card.color === 2) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/green_skip.png')} alt="" />
          </div>
        )
      } else if (card.value === 12 && card.color === 3) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/yellow_skip.png')} alt="" />
          </div>
        )
      } else if (card.value === 12 && card.color === 4) {
        return (
          <div className={className}>
            <img src={require('../img/uno-sprites/red_skip.png')} alt="" />
          </div>
        )
      } else if (card.value === 13) {
        return (
          <div className={className}>
            <img
              src={require('../img/uno-sprites/wild_color_changer.png')}
              alt=""
            />
          </div>
        )
      } else if (card.value === 14) {
        return (
          <div className={className}>
            <img
              src={require('../img/uno-sprites/wild_pick_four.png')}
              alt=""
            />
          </div>
        )
      }
    })
  }

  render() {
    return (
      <div className="game">
        <div className="center-content-container">
          <div className="big-card">
            {/* <img src={require('../img/uno-sprites/blue_0.png')} alt="" /> */}
            {this.showCards([this.state.discardedCard], 'big-card')}
          </div>
        </div>

        <div className="align-content-container shorter div-bottom">
          {this.showCards(this.state.hand, 'card smaller spacing')}
        </div>
      </div>
    )
  }
}
