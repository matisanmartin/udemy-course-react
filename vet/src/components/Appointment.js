import React, { Component } from 'react'
import uuid from 'uuid'

const initState = {
    appointment: {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    },
    error: false
}

class Appointment extends Component {
    state = {
        ...initState
    }

    handleChange = e => {
        console.log(`${e.target.name}: ${e.target.value}`)
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        const {pet, owner, date, time, symptoms} = this.state.appointment

        if(pet === '' || owner === '' || date === '' || time === '' || symptoms === '') {
            this.setState({
                error: true
            })

            return
        }
        const newAppointment = {...this.state.appointment}
        newAppointment.id = uuid()

        this.props.createNewAppointment(newAppointment)

        this.setState({
            ...initState
        })
    }

    render() {

        const {error} = this.state

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill form to create new appointment
                    </h2>
                    {
                        error 
                        ? <div className="alert alert-danger mt-2 mb-5 text-center">All fields are mandatory</div> 
                        : null
                    }

                    <form
                        onSubmit = {this.handleSubmit}
                    >
                        
                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Pet name</label>
                          <div className="col-sm-8 col-lg-10">
                              <input 
                                type="text" 
                                name="pet" 
                                className="form-control" 
                                placeholder="Pet name"
                                onChange = {this.handleChange}
                                value = {this.state.appointment.pet}/>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Owner</label>
                          <div className="col-sm-8 col-lg-10">
                              <input 
                                type="text" 
                                name="owner" 
                                className="form-control" 
                                placeholder="Owner"
                                onChange = {this.handleChange}
                                value = {this.state.appointment.owner}/>
                          </div>
                        </div>
                        
                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                          <div className="col-sm-8 col-lg-4">
                              <input 
                                type="date" 
                                name="date" 
                                className="form-control" 
                                placeholder="date"
                                onChange = {this.handleChange}
                                value = {this.state.appointment.date}/>
                          </div>
                          <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                          <div className="col-sm-8 col-lg-4">
                              <input 
                                type="time" 
                                name="time" 
                                className="form-control" 
                                placeholder="time"
                                onChange = {this.handleChange}
                                value = {this.state.appointment.time}/>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                          <div className="col-sm-8 col-lg-10">
                              <textarea 
                                type="text" 
                                name="symptoms" 
                                className="form-control" 
                                placeholder="Describe symptoms"
                                onChange = {this.handleChange}
                                value = {this.state.appointment.symptoms}/>
                          </div>
                        </div>
                        
                        <input 
                            type="submit" 
                            className="py-3 mt-2 btn btn-success btn-block" 
                            value="Add appointment"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Appointment