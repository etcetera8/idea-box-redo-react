import React from 'react';

const Card = (props) => {
  console.log(props)
  return(
    <div className='Card'>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

module.exports = Card;