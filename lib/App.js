import React, { Component } from 'react'
import Header from './Header.js'
import './styles/App.scss';


export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }


componentDidMount() {
  console.log("hi")
}

render() {
  return (
    <div className='App'>
      <Header />

    </div>

  )
}

}