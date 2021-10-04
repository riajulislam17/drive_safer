import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';
import Training from '../Training/Training';

const Home = () => {
    const [trainings, setTraining] = useState([]);
    const [trainers, setTrainer] = useState([]);

    // For Services
    useEffect(() => {
        fetch('./FakeData.json')
        .then(res => res.json())
        .then(data => setTraining(data));
    }, [])
    
    // For Trainers
    useEffect(() => {
        fetch('./FakeData.json')
        .then(res => res.json())
        .then(data => setTrainer(data));
    },[])
    
    return (
        <div className="container my-3 rounded">
            {/* Display Services */}
            <h1 className="fw-bold">Our Services</h1>
            <div className="row row-cols-1 row-cols-lg-4 g-4">
                {
                    trainings.slice(0,4).map(training=> <Training
                                key={training.id}
                                training={training}
                            ></Training>)
                }
            </div>

            {/* Display Trainers */}
            <h1 className="fw-bold">Our Trainers</h1>
            <div className="row row-cols-1 row-cols-lg-4 g-4">
                {
                    trainers.slice(0,4).map(trainer => <Trainer
                                key={trainer.id}
                                trainer={trainer}
                            ></Trainer>)
                }
            </div>
        </div>
    );
};

export default Home;