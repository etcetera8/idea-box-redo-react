import React from 'react';
import './styles/Header.scss';
import CreateCard from './CreateCard.js'
const Header = (props) => {

  return (
    <header className='Header'>
      <h1>Idea<span className='target'>Box</span><span className="red">React</span></h1>
      <CreateCard />

    </header>

  )
}
module.exports = Header;