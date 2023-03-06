import React from "react";
import styles from './Contact.module.css'
import Button from 'react-bootstrap/Button';
import resume from '../../assets/Chris_Steffen_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';




const Contact = () => {
  return ( 
    <>  
<section className={styles.contact}>
  <h1 className={styles.title}>Contact</h1>
  <div className={styles.buttonContainer}>
    <Button variant="dark" className={styles.button} href={resume} download='Chris_Steffen_Resume'>
    <FontAwesomeIcon icon={faFilePdf} className={styles.icon} />
    Resume
    </Button>
    <Button variant="dark" className={styles.button} href="https://www.linkedin.com/in/chris-steffen1/">
    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
    LinkedIn
    </Button>
    <Button variant="dark" className={styles.button} href="https://github.com/chrsteffen1">
    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
    Github
    </Button>
    <Button variant="dark" className={styles.button} href="mailto:chrisJsteffen@gmailcom">
    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
    Email
    </Button>
  </div>
</section>

    </>
  );
}

export default Contact;