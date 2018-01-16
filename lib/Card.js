import React, {Component} from 'react';
import './styles/Card.scss'

export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      key: '',
      body:'',
      qual: ''
    }
  }

  componentDidMount() {
    this.setState({qual: this.props.quality})
    this.setState({body: this.props.body})
    this.setState({key: this.props.title})
  }

  upvoter() {
    let retrieved = JSON.parse(localStorage.getItem(this.state.key))

    if(this.state.qual === "swill") {
      this.setState({qual: "good"})
      retrieved.qual = "good"
      localStorage.setItem(this.state.key, JSON.stringify(retrieved))
    }
    if (this.state.qual === "good") {
      this.setState({qual: "genius"})
      retrieved.qual = "genius"
      localStorage.setItem(this.state.key, JSON.stringify(retrieved))
    }
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
          <span id='upvote' onClick={() => this.upvoter()}>↑</span>
          <span id='downvote'>↓</span>
          <span id='quality'>Quality: {this.state.qual} </span>
        </div>
      </div>
    )
  }
}

