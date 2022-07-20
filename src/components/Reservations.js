import React from 'react';

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <Card 
        id={reservation.id}
        key={reservation.key}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
  return (
    {reservationCards}
  )
}

export default Reservations;