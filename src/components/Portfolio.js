import React from 'react';
import '../styles/Portfolio.css';
import Spotlight from '../assets/images/courier-app.png';
import projectTwo from '../assets/images/fortnite-app-screenshot.png';
import projectThree from '../assets/images/beverage-express.jpg';


function Portfolio() {
    return (
        <div><h2>My Projects</h2>
            <div className="spotlight-project">
                <img src={Spotlight} alt="Text editing application screenshot" className="spotlight-image" />
                <p>DESCRIPTION</p>
                <ul className="skill-list">
                    <li>LANGUAGE</li>
                </ul>
            </div>

            <div className="project-two">
                <img src={projectTwo} alt="Fortnite gear and skins website screenshot" className="project-image" />
                <p>DESCRIPTION</p>
                <ul className="skill-list">
                    <li>LANGUAGE</li>
                </ul>
            </div>

            <div className="project-three">
                <img src={projectThree} alt="Beer distributor website screenshot" className="project-image" />
                <p>DESCRIPTION</p>
                <ul className="skill-list">
                    <li>LANGUAGE</li>
                </ul>
            </div>
        </div>
    )
};

export default Portfolio; 