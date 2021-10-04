import React from 'react';

const Trainer = (props) => {
    const {name, trainer, designation} = props.trainer;
    return (
        <div className="container my-3 p-3 rounded shadow">
            <div class="col">
                <div className="card h-100">
                    <img className="card-img-top pictures" src={trainer} alt="..."/>
                    <div className="card-body card footer bg-secondary">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">{designation}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;