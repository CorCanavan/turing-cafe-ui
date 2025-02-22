import React from 'react';
import '../styles/Card.css';

const Card = ({ id, time, date, number, name, deleteReservation }) => {

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancel" onClick={() => deleteReservation(id)}>Cancel</button>
    </div>
  )
}

export default Card;