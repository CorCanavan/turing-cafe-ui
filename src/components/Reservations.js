import React from 'react';
import '../styles/Reservations.css';
import Card from './Card';

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <Card 
        id={reservation.id}
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
  return (
    <div className='resContainer'>
    {reservationCards}
    </div>
  )
}

export default Reservations;