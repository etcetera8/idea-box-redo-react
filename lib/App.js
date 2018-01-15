import React, { Component } from 'react'
import Header from './Header.js'
import './styles/App.scss';
import Card from './Card.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
    this.makeCard = this.makeCard.bind(this)
  }

  componentDidMount() {
    if (localStorage) {
      const arrayVar = this.state.cards.slice();
      Object.keys(localStorage).forEach( key => {
        let retrieve = localStorage.getItem(key)
        arrayVar.push({cTitle: key, cBody: JSON.parse(retrieve).cBody })
      })
      this.setState({cards: arrayVar})
    }
  }

  makeCard(title, body) {
    localStorage.setItem(title, JSON.stringify({cTitle: title, cBody: body}))
    const arrayVar = this.state.cards.slice()
    arrayVar.push({cTitle: title, cBody: body})
    this.setState({cards: arrayVar})
    console.log(this.state.cards)
  }

  deleteCard(key) {
    localStorage.removeItem(key)
  }

  render() {
    return (
      <div className='App'>
        <Header makeCard={this.makeCard} />
        {
          this.state.cards.length > 0 &&
          <div className='displayCards'>
          {
            this.state.cards.map( (card, i) => {
              return (
                <Card
                  key = {i}
                  title={card.cTitle}
                  body={card.cBody}
                  delete={this.deleteCard}
                />
              )
            })
          }
          </div>
        }
      </div>
    )
  }

}