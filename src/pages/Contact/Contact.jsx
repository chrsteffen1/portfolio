import React from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com'
import styles from './Contact.module.css'
import  gitIcon  from '../../assets/git_icon.png'
import  linkedinIcon  from '../../assets/linkedin.png'
import Button from 'react-bootstrap/Button';
import resume from '../../assets/Chris_Steffen_Resume.pdf'
import emailIcon from '../../assets/email_icon.png'

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
      
      <div className={styles.formDiv}>
        <a href={resume} download='Chris_Steffen_Resume'><Button variant="dark" className={styles.buttonDownload}>Download My Resume Here</Button></a>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/chris-steffen1/" alt="" target='_blank' rel="noreferrer"><img src={linkedinIcon} alt="linkedin icon" className={styles.icons}/></a>
          <a href="https://github.com/chrsteffen1" alt='' target='_blank' rel="noreferrer" ><img src={gitIcon} alt="git icon" className={styles.icons}/></a>
          <a href="mailto:chrisJsteffen@gmailcom"><img src={emailIcon} alt="email icon" className={styles.icons}/></a>
        </div>
      </div>
    </>
  );
}

export default Contact;