import React from 'react'
import SavedAppointment from './SavedAppointment'

const Appointments = ({appointments}) => (
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">
                Manage appointments
            </h2>
            <div className="lista-citas">
                {appointments.map(appointment => (
                    <SavedAppointment 
                        key={appointment.id}
                        appointment={appointment}
                    />
                ))}
            </div>
        </div>
    </div>
)

export default Appointments
