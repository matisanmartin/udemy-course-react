import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import Appointment from './components/Appointment'
import Appointments from './components/Appointments'

class App extends Component {
  state = {
    appointments: []
  }

  componentDidMount() {
    const localStorageAppointments = localStorage.getItem('appointments')
    if(localStorageAppointments) {
      this.setState({
        appointments: JSON.parse(localStorageAppointments)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments))
  }

  createNewAppointment = data => {
    const appointments = [...this.state.appointments, data]
    this.setState({
      appointments
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
          title='Vet administrator'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Appointment 
              createNewAppointment={this.createNewAppointment}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <Appointments 
              appointments = {this.state.appointments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App