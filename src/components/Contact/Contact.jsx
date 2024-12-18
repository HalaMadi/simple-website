import React from 'react';

const Contact = () => {
    return (
        <div className="container text-center my-5">
            <h2 className="fw-bold fs-1 text-uppercase my-5">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5 text-start">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control border-0 border-bottom"
                            id="floatingName"
                            placeholder="Full Name"
                        />
                        <label htmlFor="floatingName">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control border-0 border-bottom"
                            id="floatingEmail"
                            placeholder="Email Address"
                        />
                        <label htmlFor="floatingEmail">Email Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="tel"
                            className="form-control border-0 border-bottom"
                            id="floatingPhone"
                            placeholder="Phone Number"
                        />
                        <label htmlFor="floatingPhone">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control border-0 border-bottom"
                            id="floatingMessage"
                            placeholder="Message"
                            style={{ height: '100px' }}
                        ></textarea>
                        <label htmlFor="floatingMessage">Message</label>
                    </div>
                    <button className="btn custom-btn mt-4">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
