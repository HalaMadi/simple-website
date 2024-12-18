import React from 'react';

const Footer = () => {
    return (
        <footer className="footer text-center py-5">
            <div className="container">
                <div className="row">
                    {/* Location Section */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase fw-bold mb-3">Location</h5>
                        <p className="mb-0">2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    {/* Around the Web Section */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase fw-bold mb-3">Around the Web</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" className="text-dark">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-dark">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </div>
                    {/* About Section */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase fw-bold mb-3">About Freelancer</h5>
                        <p className="small">
                            Freelancer is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
