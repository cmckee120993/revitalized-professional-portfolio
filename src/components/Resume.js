import React from "react";
import "../styles/Resume.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';

function Resume() {
  return (
    <content>
      <h2 className="resume-title">Résumé</h2>
      <div className="resume-cat">
        <div className="programming-skills">
          <h3>Programming Skills</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>APIs</li>
            <li>Node.js</li>
            <li>OOP</li>
            <li>Express.js</li>
            <li>MYSQL</li>
            <li>ORM</li>
            <li>MVC</li>
            <li>MongoDB</li>
            <li>PWA</li>
            <li>React</li>
            <li>MERN</li>
            <li>State</li>
          </ul>
        </div>

        <div className="education-div">
        <h3>Education</h3>
        <ul className="education">
            <li className="top-item">University of California, Los Angeles</li>
                <ul className="university-info">
                    <li>June to December 2022</li>
                    <li>Certificate Full Stack Web Development</li>
                </ul>
            <li className="top-item">University of California, Los Angeles</li>
            <ul className="university-info">
                <li>Fall 2018 to Present</li>
                <li>Doctoral Candidate in the Department of Comparative Literature</li>
                <li>Certificates:</li>
                    <ul className="university-info">
                        <li>Urban Humanitites</li>
                        <li>Writing Pedagogy: Language Learner Emphasis</li>
                    </ul>
            </ul>
            <li className="top-item">Penn State University</li>
                <ul className="university-info">
                    <li>Summer 2012 to Spring 2017</li>
                    <li>MA: Comparative Literature</li>
                    <li>BAs:</li>
                        <ul className="university-info">
                            <li>Comparative Literature</li>
                            <li>French</li>
                            <li>Spanish</li>
                        </ul>
                    <li>Minor: Arabic</li>
                </ul>
            <li className="top-item">Additional Education:</li>
                <ul className="university-info">
                    <li>Middlebury College Summer Language, Arabic (2020)</li>
                    <li>Concordia University, Translation and the City (2019)</li>
                    <li>University of Houston-Victoria, Certificate in Literary Translation (2017)</li>
                </ul>
        </ul>
        </div>
        <FontAwesomeIcon className="resume-icon" icon={faGraduationCap}/>
      </div>
    </content>
  );
}

export default Resume;
