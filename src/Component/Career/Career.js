import React from 'react';

const Career = () => {
    return (
        <div className="container bg-secondary p-3 my-3 rounded">
            <h1>You May Join With Us As Trainer</h1>
            <form className="text-start">
                <div class="mb-3">
                    <label class="form-label fw-bold">Name</label>
                    <input type="text" class="form-control" />
                </div>

                <div class="mb-3">
                    <label class="form-label fw-bold">Email address</label>
                    <input type="email" class="form-control" />
                </div>
                
                <div class="mb-3">
                    <label class="form-label fw-bold">Phone</label>
                    <input type="number" class="form-control"/>
                </div>

                <div class="mb-3">
                    <label class="form-label fw-bold">Address</label>
                    <input type="text" class="form-control"/>
                </div>

                <div class="mb-3">
                    <label class="form-label fw-bold">Upload Resume</label>
                    <input type="file" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Career;