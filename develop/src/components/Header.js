import React from 'react';
import "../styles/Header.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Paul Sun</h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                        <div className="nav-link">
                            <Link to="/Home">Home <span class="sr-only">(current)</span></Link>
                        </div>

                        <div className="nav-link">
                            <Link to="/Portfolio">Portfolio <span class="sr-only">(current)</span></Link>
                        </div> 

                    <li className="nav-item">
                        <a className="nav-link" href="mailto:pfsun9999@msn.com">Email</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/LostandConfusedStudent">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://linkedin.com/in/paul-sun-87918598">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://linkedin.com/in/paul-sun-87918598">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;