import React from 'react';
import '../styles/Portfolio.css';
import Spotlight from '../assets/images/courier-app.png';
import projectTwo from '../assets/images/fortnite-app-screenshot.png';
import projectThree from '../assets/images/beverage-express.jpg';


function Portfolio() {
    return (
        <div><h2>My Projects</h2>
            <div className="spotlight-project">
                <a href="https://courier-share.herokuapp.com/">
                    <img src={Spotlight} alt="Text editing application screenshot" className="spotlight-image" />
                </a>
                <p>Courier App allows writers and creatives to join virtual writing groups that allow them to post their work to a specific group of users. When posting work, a WYSIWYG editor helps correct grammatical and typographical errors. 
                    Users within a group may then comment on the writing in the app. Groups are made private and available by invite only. Users must create a log in, create a group, and then add other users into the group. 
                    This moderator can then also remove people from the group if desired; users can make and belong to as many groups as they'd like.
                    This website is created using Handlebars and a MYSQL database. This project was a collaboration with Joseph Hansen, Katarina Mihaylovich, and Inna Sherstnyova. Click on the image to check it out!</p>
                <ul className="skill-list">
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                </ul>
            </div>

            <div className="project-two">
                <a href="https://swyner97.github.io/fortnite-app/">
                    <img src={projectTwo} alt="Fortnite gear and skins website screenshot" className="project-image" />
                </a>
                <p>This website is for Fortnite players who wish to look at how they can customize their characters without having to log onto the game. Two APIs populate the daily store as well as a full store archive.
                The project uses local storage to allow users to add gear that they want to a wishlist for later. Rather than having to scroll through the entire archive, users can search for desired items, even if they aren't in the Fortnite Store for that day. 
                This project was a collaboration with  Sarah Wyner and Andre Silva. Click on the image to check it out!
                </p>
                <p className="note">Before using the site, please go to <a href="https://cors-anywhere.herokuapp.com/corsdemo">Heroku App</a> to gain access to the proxy.</p>
                <ul className="skill-list">
                    <li>HTML</li>
                    <li>CSS/Bulma</li>
                    <li>JavaScript/Jquery</li>
                    <li>APIs</li>
                </ul>
            </div>

            <div className="project-three">
                <a href="mybevexp.com">
                    <img src={projectThree} alt="Beer distributor website screenshot" className="project-image" />
                </a>
                <p>This website is a placeholder for larger, more in-depth website for Beverage Express, a beer distributor in Carlisle, Pennsylvania. The styling fits their desires. 
                    The favicon and the business' logo were also designed by me. The first step is this single-page site, which lists their current products on tap, their contact, and some basic information about the store. 
                    My contract continues with them to create a more dynamic site with product search capability, order options, and more! Click on the image to check it out!</p>
                <ul className="skill-list">
                    <li>HTML</li>
                    <li>CSS/Bootstraps</li>
                </ul>
            </div>
        </div>
    )
};

export default Portfolio; 