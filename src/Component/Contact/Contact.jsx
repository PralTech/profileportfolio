import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {

  const form = useRef();

  const [done, setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbd60k9', 'template_8365jvq', form.current, 'wAY_foO7ykSsJe1Fw')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
       
    }

  return (
    <div className="contact-form">
        <div className="c-left">
        <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
          
        </div>
        </div>

        <div className="c-right">
            <form ref={form} onClick={sendEmail}>
                <input type="text" name='user_name'
                 className='user' placeholder='Name' />
                <input type="email" name='user_email' 
                className='user' placeholder='Email' />
                <textarea name="message" className='user' 
                placeholder='Message'/>
                <input type="submit" value="Send" 
                className="button" />
               <span>{done &&  "Thanks for Contacting me!"}</span>

            </form>
        </div>
    </div>
        
  
  )
}


export default Contact