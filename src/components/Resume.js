import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <content>
      <div>
        <h2>Programming Skills</h2>
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

        <h2>Education</h2>
        <ul className="education">
            <li>University of California, Los Angeles</li>
                <ul>
                    <li>June to December 2022</li>
                    <li>Certificate Full Stack Web Development</li>
                </ul>
            <li>University of California, Los Angeles</li>
            <ul>
                <li>Fall 2018 to Present</li>
                <li>Doctoral Candidate in the Department of Comparative Literature</li>
                <li>Certificates:</li>
                    <ul>
                        <li>Urban Humanitites</li>
                        <li>Writing Pedagogy: Language Learner Emphasis</li>
                    </ul>
            </ul>
            <li>Penn State University</li>
                <ul>
                    <li>Summer 2012 to Spring 2017</li>
                    <li>MA: Comparative Literature</li>
                    <li>BAs:</li>
                        <ul>
                            <li>Comparative Literature</li>
                            <li>French</li>
                            <li>Spanish</li>
                        </ul>
                    <li>Minor: Arabic</li>
                </ul>
            <li>Additional Education:</li>
                <ul>
                    <li>Middlebury College Summer Language, Arabic (2020)</li>
                    <li>Concordia University, Translation and the City (2019)</li>
                    <li>University of Houston-Victoria, Certificate in Literary Translation (2017)</li>
                </ul>
        </ul>
      </div>
    </content>
  );
}

export default Resume;
