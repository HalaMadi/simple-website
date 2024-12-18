
import React from 'react'
import '../../index.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container container-fluid">
                    <a className="navbar-brand text-white fs-3 fw-bold" href="#">START BOOTSTRAP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-4">
                            <li className="nav-item">
                                <a className="nav-link active text-white fw-bold" aria-current="page" href="#">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white fw-bold" aria-current="page" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white fw-bold" aria-current="page" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar