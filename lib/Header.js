import React from 'react';
import './styles/Header.scss';
import CreateCard from './CreateCard.js'
const Header = (props) => {

  return (
    <header className='Header'>
      <h1>idea<span className='target'>Box</span><span className="red">React</span></h1>
      <CreateCard makeCard={props.makeCard} />
    </header>
  )
}
module.exports = Header;