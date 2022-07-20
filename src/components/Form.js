import React, { Component } from 'react';
import '../styles/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  submitReservation = (event) => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    this.props.addReservation(newReservation);
  }

  render() {
    return (
      <form>
        <input 
          name="name"
          type="text"
          value={this.state.name}
          placeholder="Name"
          onChange={event => this.handleChange(event)}
        />

        <input 
          name="date"
          type="text"
          value={this.state.date}
          placeholder="Date (mm/dd)"
          onChange={event => this.handleChange(event)}
        />

        <input 
          name="time"
          type="text"
          value={this.state.time}
          placeholder="Time"
          onChange={event => this.handleChange(event)}
        />

        <input 
          name="number"
          type="number"
          value={this.state.number}
          placeholder="Number of guests"
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitReservation(event)}>Make A Reservation</button>
      </form>
    )
  }
}

export default Form;