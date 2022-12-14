import React from 'react';
import '../styles/Contact.css';
import {useForm, ValidationError} from '@formspree/react';



function Contact() {
    const [state, handleSubmit] = useForm('xqkjjjnr');

    if(state.succeeded) {
        return (
            <div className="success-message">
                <p>Thanks for your message! Clay will get back to you as soon as possible.</p>
                <button onClick={() => window.location.reload()}>Back to About Page</button>
            </div>
        );
    }


    return (
        <div>
            <h2 className="contact-title">Contact Me</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email"/>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea className="textarea" name="message" rows="10"/>
            </div>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div>
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>
      </div>
    </form>
    </div>
  )
};

export default Contact; 