import React, {Component} from 'react';
import './styles/Card.scss'

export default class Card extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div className='Card'>
        <span 
          className='delete-button'
          onClick={() => props.delete(this.props.title)}>x
        </span>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <div className='vote'>
          <span id='upvote' onClick={() => this.props.upvote(this.props.title)}>↑</span>
          <span id='downvote'>↓</span>
          <span id='quality'>Quality: {this.props.quality} </span>
        </div>
      </div>
    )
  }
}

