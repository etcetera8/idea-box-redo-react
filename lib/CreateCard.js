import React, { Component } from 'react'
import './styles/CreateCard.scss'


export default class CreateCard extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      quality: ['swill', 'good', 'genius']
    }
    this.createTitle = this.createTitle.bind(this)
    this.createBody = this.createBody.bind(this)
  }

  createTitle(e) {
    this.setState({ title: e.target.value });
  }

  createBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return(
      <div className="inputs">
        <input 
          id='title' 
          type='text'
          placeholder='Title'
          onChange={this.createTitle} 
        />

        <input
          id='body'
          type='text'
          placeholder='Put your idea here'
          onChange={this.createBody}
        />

        <button onClick={() => this.props.makeCard(this.state.title, this.state.body, this.state.quality[0])}>Save</button>

      </div>
    )
  }
}