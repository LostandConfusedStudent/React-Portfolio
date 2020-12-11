import React from 'react';
import "../styles/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Paul Sun</h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a className="nav-link" href="https://google.com">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://linkedin.com/in/paul-sun-87918598">Portfolio</a>
                    </li>
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