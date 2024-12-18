const About = () => {
    return (
        <div className="about text-center">
            <h2 className="fw-bold fs-1 text-uppercase my-5">About</h2>
            <div className="row mx-auto custom-container">
            <div className="col-md-6 my-3 fs-5 text-start">
                    <p>
                        Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </div>
                <div className="col-md-6 my-3 fs-5 text-start">
                    <p>
                        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                    </p>
                </div>
            </div>
            <button className="btn btn-outline-light mt-4">Free Download</button>
        </div>
    );
};

export default About;
