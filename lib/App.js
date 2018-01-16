import React, { Component } from 'react'
import Header from './Header.js'
import './styles/App.scss';
import Card from './Card.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
    this.makeCard = this.makeCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  componentDidMount() {
    if (localStorage) {
      const arrayVar = this.state.cards.slice();
      Object.keys(localStorage).forEach( key => {
        let retrieve = localStorage.getItem(key)
        arrayVar.push({cTitle: key, cBody: JSON.parse(retrieve).cBody, qual: JSON.parse(retrieve).qual })
      })
      this.setState({cards: arrayVar})
    }
  }

  makeCard(title, body, quality) {
    localStorage.setItem(title, JSON.stringify({cTitle: title, cBody: body, qual: quality}))
    const arrayVar = this.state.cards.slice()
    arrayVar.push({cTitle: title, cBody: body, qual: quality})
    this.setState({cards: arrayVar})
  }

  deleteCard(key) {
    localStorage.removeItem(key)
    let newArr = this.state.cards.filter( card => {
      if (card.cTitle !== key)
        return card;
    })
    this.setState({cards: newArr})
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
                  quality={card.qual}
                  delete={this.deleteCard}
                  upvote={this.upvote}
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