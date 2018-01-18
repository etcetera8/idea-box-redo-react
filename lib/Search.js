import React, { Component } from 'react'
import './styles/Search.scss'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div className="search-cards">
        <input 
          className="search-for-cards"
          type="text"
          placeholder="search cards"
          onChange={this.props.searchCards}
        />

      </div>


    )
  }


}