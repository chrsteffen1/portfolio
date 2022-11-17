import React from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com'
import styles from './Contact.module.css'
import  gitIcon  from '../../assets/git_icon.png'
import  linkedinIcon  from '../../assets/linkedin.png'

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
      <h1 className={styles.contact}>Contact</h1>
      {/* <div>
        <p>Reach out if you'd liked to connect <a href="mailto:ChrisJSteffen@gmail.com ">email</a> <br />
        Other links <br />
        <a href="https://www.linkedin.com/in/chris-steffen1/" alt="" target='_blank' rel="noreferrer">linkedin</a>
        <br />
        <a href="https://github.com/chrsteffen1" alt='' target='_blank' rel="noreferrer">Github</a>
        </p>
      </div> */}
      <div className={styles.formDiv}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.input}>
            <label>Name</label>
            <input type="text" name="user_name" required/>
          </div>
          <div className={styles.input}>
            <label>Email</label>
            <input type="email" name="user_email" required/>
          </div>
          <div className={styles.input}>
            <label>Message</label>
            <textarea name="message" cols='40' rows='5' required/>
          </div>
          <div className={styles.input}>
            <button type="submit" value="Send">Submit</button>
          </div>
        </form>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/chris-steffen1/" alt="" target='_blank' rel="noreferrer"><img src={linkedinIcon} alt="linkedin icon" className={styles.icons}/></a>
          <a href="https://github.com/chrsteffen1" alt='' target='_blank' rel="noreferrer" ><img src={gitIcon} alt="git icon" className={styles.icons}/></a>
        </div>
      </div>
    </>
  );
}

export default Contact;