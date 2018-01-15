import React from 'react';
import './styles/Card.scss'

const Card = (props) => {
  return(
    <div className='Card'>
      <span 
        className='delete-button'
        onClick={() => props.delete(props.title)}>x
      </span>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <div className='vote'>
        <span id='upvote'>↑</span>
        <span id='downvote'>↓</span>
        <span id='quality'>Quality: swill</span>
      </div>
    </div>
  )
}

module.exports = Card;