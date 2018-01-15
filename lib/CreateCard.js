import React, { Component } from 'react'
import './styles/CreateCard.scss'

export default class CreateCard extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  render() {
    return(
      <div className="inputs">
        <input 
          id='title' 
          type='text'
          placeholder='Title' 
        />

        <input
          id='body'
          type='text'
          placeholder='Put your idea here'
        />
      </div>
    )
  }
}