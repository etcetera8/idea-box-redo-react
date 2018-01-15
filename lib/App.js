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
  console.log("hi")
}

makeCard(title, body) {
  // this.setState({
  //   cards: {cTitle: title, cBody: body}
  // })
  const arrayVar = this.state.cards.slice()
  arrayVar.push({cTitle: title, cBody: body})
  this.setState({cards: arrayVar})
  console.log(this.state.cards)

}

render() {
  return (
    <div className='App'>
      <Header makeCard={this.makeCard} />
      <p>hi</p>
      {
        this.state.cards.length > 0 &&
        <div className='displayCards'>
        {
          this.state.cards.map( card => {
            return (
              <Card 
                title={card.cTitle}
                body={card.cBody}
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