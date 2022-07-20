import React, { Component } from 'react';
import './App.css';
import Reservations from '../components/Reservations';
import Form from '../components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ reservations: data }))
    .catch(error => console.log(error.message));
  }

  addReservation = (newReservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({ reservations: [...this.state.reservations, data ] }))
    .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
