import React from 'react';
import '../styles/Contact.css';
import {useForm, ValidationError} from '@formspree/react';



function Contact() {
    const [state, handleSubmit] = useForm('xqkjjjnr');

    if(state.succeeded) {
        return (
            <div>
                <p>Thanks for your message! Clay will get back to you as soon as possible.</p>
                <button onClick={() => window.location("/#about")}>Back to About Page</button>
            </div>
        );
    }


    return (
        <div>
            <p>Contact Me</p>

        <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  )
};

export default Contact; 