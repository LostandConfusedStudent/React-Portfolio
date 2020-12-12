import React from "react";
import Profile from "../assets/images/rsz_profile.jpg";
import "../styles/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <img src={ Profile } alt="Profile" />
            </div>

            <div className="col-md-9">
                <p>Flexible front-end web developer with a background in art and kinesiology, and an understanding of how multiple components can link to each other with proper transitioning to form a complete and fluid action. Expecting to earn a certificate in full-stack web development from the University of Washington in November 2020 and still learning and developing skills in HTML, CSS, JavaScript, and React. My main focus is to expand my knowledge in coding and contribute to making projects that are both aestheically pleasing and user-friendly. I rcently worked on a team of four to develop an application that allows users to search a study topic and view a list of YouTube tutorials. I'm eager to combine my background in art adn kinesiology with my technical skills to develop user-friendly projects</p>
            </div>
        </div>

    )
}

export default Home;