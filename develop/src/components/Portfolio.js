import React from "react";
import "../styles/Portfolio.css";
import Dashboard from "../assets/images/Dashboard.png";
import Dine_and_Travel from "../assets/images/Dine_and_Travel.png";
import note from "../assets/images/note.png";
import password from "../assets/images/password.png";
import Start from "../assets/images/Start.png";
import Topics from "../assets/images/Topics.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
    return (
        <div>
            <h2>My Projects</h2>

            <div className="row">
                <div className="col-med-12">
                    <h3>Password Generator</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-med-6">
                    <img src={password} className="project" alt="Password Generator" />
                </div>

                <div className="col-med-6">
                    <p>The main objective is to create a random password generator with prompts. The prompts will request information taht will influence the generator to come up with a more unique password for stronger security. This information will be inputs based on the user's preferences. After all the prompts are satisfied, a random password will be generated and displayed on the page.</p>
                    <a href="https://github.com/LostandConfusedStudent/Password-Generator/">Repository Link</a>
                    <a href="https://lostandconfusedstudent.github.io/Password-Generator/">Deployed Link</a>
                </div>
            </div>

            <div className="row">
                <div className="col-med-12">
                    <h3>Work Day Scheduler</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-med-6">
                    <img src={note} className="project" alt="Work Day Scheduler" />
                </div>

                <div className="col-med-6">
                    <p>This is a calendar application using a library from https://momentjs.com/. The application should work in the browser and let users save events in time slots of their choice. They can type any notes they have for a specific work hour time slot. The save buttons save their notes to local storage, which means that they'll remain on the page even after refreshing it. The date and time are also displayed at the top, and the clear button underneath it clears all entries.</p>
                    <a href="https://github.com/LostandConfusedStudent/Work-Day-Scheduler/">Repository Link</a>
                    <a href="https://lostandconfusedstudent.github.io/Work-Day-Scheduler/">Deployed Link</a>
                </div>
            </div>

            <div className="row">
                <div className="col-med-12">
                    <h3>Dine and Travel</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-med-6">
                    <img src={Dine_and_Travel} className="project" alt="Dine and Travel" />
                </div>

                <div className="col-med-6">
                    <p>This is an application that allows users to search for a cuisine of their choice, which would give them options of restaurants near their location. Alternatively, if the user would prefer to make a specific meal themselves and/or if they do not have a restaurant near them that serves their desired cuisine, they can also search for a recipe.</p>
                    <a href="https://github.com/LostandConfusedStudent/Dine-and-Travel/">Repository Link</a>
                <a href="https://lostandconfusedstudent.github.io/Dine-and-Travel/">Deployed Link</a>
                </div>
            </div>

            <div className="row">
                <div className="col-med-12">
                    <h3>Code Quiz</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-med-6">
                    <img src={Start} className="project" alt="Code Quiz" />
                </div>

                <div className="col-med-6">
                    <p>This is a responsive application that challenges the users to take a timed quiz about coding. The questions are multiple-choice and revolve around JavaScript fundamentals. The questions will show after the user clicks start or selects an answer. Answering a question incorrectly will result in a penalty of reducing the time left in the timer. The game ends after all the questions are answered or the timer reaches zero secconds. Afterwards the player receives a score out of five and can enter in his or her initials for the scoreboard. The clear button clears all displayed scores.</p>
                    <a href="https://github.com/LostandConfusedStudent/Code-Quiz/">Repository Link</a>
                <a href="https://lostandconfusedstudent.github.io/Code-Quiz/">Deployed Link</a>
                </div>
            </div>

            <div className="row">
                <div className="col-med-12">
                    <h3>Weather Dashboard</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-med-6">
                    <img src={Dashboard} className="project" alt="Weather Dashboard" />
                </div>

                <div className="col-med-6">
                    <p>This is a weather application that retrieves data from an external API to view the weather of a city of interest. After typing in a city as input and clicking on the submit button, the HTML and CSS code will be updated and the application will display current and future weather conditions for the city of interest. Displayed information will include: city name, date, icon representations, temperature, humidity, wind speed, and UV index. There will also be a search history displayed under the search bar adn can be cleared with the clear button.</p>
                    <a href="https://github.com/LostandConfusedStudent/Weather-Dashboard/">Repository Link</a>
                <a href="https://lostandconfusedstudent.github.io/Weather-Dashboard/">Deployed Link</a>
                </div>
            </div>

            <div className="row">
                <div className="col-med-12">
                    <h3>BookFace</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-med-6">
                    <img src={Topics} className="project" alt="BookFace" />
                </div>

                <div className="col-med-6">
                    <p>This is a study application that allows users to view a list of YouTube tutorials and book resources after clicking on one of the topics of interest, which are listed after clicking on the Subjects tab. All topics are related to what we are learning in this class, and after clicking on a topic button, a list of links will be displayed in two columns. One column has all hte YouTube video links, and the other has all the book links.</p>
                    <a href="https://github.com/karunasato/BookFace/">Repository Link</a>
                <a href="https://bookface2020.herokuapp.com/">Deployed Link</a>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;