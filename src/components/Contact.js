import React, {useState} from 'react';
import '../styles/Contact.css';
import {useForm, ValidationError} from '@formspree/react';
import {validateEmail} from '../util/helpers';
require('dotenv').config();


function Contact() {
    const [state, handleSubmit] = useForm(process.env.REACT_PORTFOLIO_FORM_ID);

    if(state.succeeded) {
        return (
            <div>
                <p>Thanks for your message! Clay will get back to you as soon as possible.</p>
                <button onClick={() => window.location("/#about")}>Back to About Page</button>
            </div>
        );
    }
    return (
       <form onSubmit={handleSubmit}>

       </form>
    )
};

export default Contact; 