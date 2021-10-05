import React from 'react';
import { Link } from 'react-router-dom';
import './Serving.css'

const Serving = (props) => {
    const { name, designation, cost, duration, trainer } = props.serving;

    return (
        <div className="container my-3 p-3 rounded shadow">
            <div class="col">
                    <div className="card h-100">
                        <img className="card-img-top pictures" src={trainer} alt="..."/>
                        <div className="text-start p-3 card-body bg-secondary">
                            <h5 className="card-text"><span className="fw-bold">Trainer Name:</span> {name}</h5>
                            <h5 className="card-title"><span className="fw-bold">Trainer Designation:</span> {designation}</h5>
                            <h5 className="card-title"><span className="fw-bold">Training Duration:</span> {duration}</h5>
                            <h5 className="card-title"><span className="fw-bold">Training Cost:</span> {cost}</h5>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-dark text-white fw-bold">Registration</button>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Serving;