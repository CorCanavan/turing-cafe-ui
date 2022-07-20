import React from 'react';
import '../styles/Card.css';

const Card = ({ id, time, date, number, name }) => {

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card;