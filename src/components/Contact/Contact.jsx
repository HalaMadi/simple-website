import '../../index.css'
const Contact = () => {
    return (
        <div className="contact container text-center my-5">
            <h2 className='fw-bold fs-1 text-uppercase my-4'>Contact</h2>
            <div className="row justify-content-center">
                <div className="form-floating mb-3 col-8">
                    <input type="name" className="form-control border-0 border-bottom" id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Full name</label>
                </div>
                <div className="form-floating mb-3 col-8">
                    <input type="email" className="form-control border-0 border-bottom" id="floatingInput" placeholder="name@example.com" required/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3 col-8">
                    <input type="phone" className="form-control border-0 border-bottom" id="floatingPhone" placeholder="Password" />
                    <label htmlFor="floatingPhone">Phone</label>
                </div>
                <div className="form-floating mb-3 col-8">
                    <textarea className="form-control border-0 border-bottom" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                    <label htmlFor="floatingTextarea2">Message</label>
                </div>
                <div className="form-floating mb-3 col-8 text-start">
                <button className='btn custom-btn'>Send</button></div>
            </div>
        </div>
    );
};

export default Contact;
