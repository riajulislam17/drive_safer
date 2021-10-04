import React from 'react';

const About = () => {
    const activeStyle = {
        textAlign: "justify"
    }
    return (
        <div className="container bg-success my-3 rounded p-3">
            <h1 className="text-decoration-underline">About Driving</h1>
            <p activeStyle={activeStyle} className="fst-italic"><strong>Driver's education, driver education, driving education, driver's ed, or driving tuition or driving lessons is a formal class or program that prepares a new driver to obtain a learner's permit or driver's license. The formal class program may also prepare existing license holders for an overseas license conversion or medical assessment driving test or refresher course. It may take place in a classroom, in a vehicle, online, or a combination of the above. Topics of instruction include traffic code or laws and vehicle operation. Typically, instruction will warn of dangerous conditions in driving such as road conditions, driver impairments, and hazardous weather. Instructional videos may also be shown, demonstrating proper driving strategies and the consequences for not observing the rules.Education is intended to supplement the knowledge obtained from government-printed driving handbooks or manuals and prepares students for tests to obtain a driver's license or learner's permit. In-car instruction places a student in a vehicle with an instructor. A car fitted with dual controls, which has at least an auxiliary brake pedal and possibly other controls on the passenger side, may be used.</strong></p>
        </div>
    );
};

export default About;