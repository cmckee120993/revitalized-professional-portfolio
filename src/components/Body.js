import React from 'react';
import '../styles/Body.css';
import Portrait from '../assets/images/clay-portrait.jpg'

function Body() {
    return (
        <div className="body">
        <h2>Clayton McKee</h2>
        <h3>Full Stack Developer</h3>
        <img src={Portrait} alt="Clay's Portrait" className="portrait"/>
        <p>My name is Clay and I am currently taking part in UCLA's Full Stack Coding Bootcamp. The many hours that I've spent studying and practicing coding have allowed me to accept various projects to create sites and applications for businesses and friends. In addition to an ongoing project coding and customizing a site for a beverage distributor, I am also managing their marketing from logo design to social media/SEO.</p>
        <p>I have recently left higher education where I taught literature classes and conducted academic research in Arabic, English, French, and Spanish. I thrive in a both solitary and collaborative coding environments when I am able to combine my analytic, logic, and research skills with writing and creative skills that I've developed throughout my career. Not only do I strive to write airtight, accessible, and clear code, but I aim to treat every project as an opportunity to present a full product with quality writing and appearance. </p>
        </div>
    )
};

export default Body; 