import React from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }

  return ( 
    <>
      <h1>Contact</h1>
      <div>
        <p>Reach out if you'd liked to connect <a href="mailto:ChrisJSteffen@gmail.com ">email</a> <br />
        Other links <br />
        <a href="https://www.linkedin.com/in/chris-steffen1/" alt="" target='_blank' rel="noreferrer">linkedin</a>
        <br />
        <a href="https://github.com/chrsteffen1" alt='' target='_blank' rel="noreferrer">Github</a>
        </p>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required/>
          <label>Email</label>
          <input type="email" name="user_email" required/>
          <label>Message</label>
          <textarea name="message" required/>
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default Contact;