import React from 'react';
import '../Contact/Contact.css'

const Contact = () => {
    return (
        <div className='contact-form'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>
            <div className="c-right">
                <form action="#">
                    <input type="text" name='user_name' className='user' placeholder='Type your name' />
                    <input type="email" name='user_email' className='user' placeholder='Type your email' />
                    <input type="message" name='user_message' className='user' placeholder='Type your message' />
                    <input type="submit" name='user_name' className='button' value='Send'/>
                </form>
            </div>
        </div>
    );
};

export default Contact;