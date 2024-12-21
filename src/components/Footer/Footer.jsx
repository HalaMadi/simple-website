import "./../../index.css";
const Footer = () => {
    return (
        <footer className="footer text-center py-5">
            <div className="container">
                <div className="row">
                    <div className="location col-md-4 ">
                        <h4 className="text-uppercase fw-bold mb-3">Location</h4>
                        <p>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                    <div className="social col-md-4">
                        <h4 className="text-uppercase fw-bold mb-3">Around the Web</h4>
                    </div>
                    <div className="Freelancer col-md-4 ">
                        <h4 className="text-uppercase fw-bold mb-3">About Freelancer</h4>
                        <p>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by{" "}
                            <a className="text-success" href="#">Start Bootstrap</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
