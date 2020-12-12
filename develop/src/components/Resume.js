import React from "react";
import "../styles/Resume.css";
import myResume from "../assets/images/Resume.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
    return (
        <div>
            <img src={ myResume } className="resume" alt="Resume" />
        </div>
    )
}

export default Resume;