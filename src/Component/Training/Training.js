import React from 'react';
import './Training.css'

const Training = (props) => {
    const {img, service, duration, name} = props.training;
    return (
        <div className="container my-3 p-3 rounded shadow">
            <div class="col">
                <div className="card h-100">
                    <img className="card-img-top pictures" src={img} alt="..."/>
                    <div className="card-body card footer bg-secondary">
                        <h5 className="card-title"><span className="fw-bold">Training:</span> {service}</h5>
                        <h5 className="card-title"><span className="fw-bold">Trainer Name:</span> {duration}</h5>
                        <h5 className="card-title"><span className="fw-bold">Trainer Name:</span> {name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;