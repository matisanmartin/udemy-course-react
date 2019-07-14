import React from 'react'

const SavedAppointment = ({appointment}) => {
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{appointment.pet}</h3>
                <p className="card-text"><span>Owner: </span> <span>{appointment.owner}</span></p>
                <p className="card-text"><span>Date: </span> <span>{appointment.date}</span></p>
                <p className="card-text"><span>Time: </span> <span>{appointment.time}</span></p>
                <p className="card-text"><span>Symptoms: </span></p>
                <p className="card-text">{appointment.symptoms}</p>
            </div>
        </div>
    )
}

export default SavedAppointment
