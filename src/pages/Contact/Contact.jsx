import React from "react";
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faFile } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return ( 
    <section className={`${styles.contact} section`} id='contact'>
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactIntro}>
              <h3>Ready to bring your ideas to life?</h3>
              <p>
                I'm always excited to discuss new opportunities and collaborate on innovative projects. 
                Whether you're looking for a full-stack developer, need help with a specific project, 
                or just want to connect, I'd love to hear from you.
              </p>
            </div>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.contactText}>
                  <h4>Email</h4>
                  <a href="mailto:chrisJsteffen@gmail.com">chrisJsteffen@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className={styles.contactText}>
                  <h4>Location</h4>
                  <p>Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactActions}>
            <div className={styles.primaryActions}>
              <a 
                href="mailto:chrisJsteffen@gmail.com"
                className={`${styles.contactBtn} ${styles.btnPrimary}`}
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Get In Touch
              </a>
              
              <a 
                href="https://docs.google.com/document/d/135vuVJoC3ErVarGzMLxBiob3KqC-vZvvZpu8e7oYK0A/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.contactBtn} ${styles.btnSecondary}`}
              >
                <FontAwesomeIcon icon={faFile} />View Resume
              </a>

            </div>
            
            <div className={styles.socialActions}>
              <h4>Connect with me</h4>
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.linkedin.com/in/chris-steffen1/"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/chrsteffen1"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.availability}>
          <div className={styles.availabilityCard}>
            <div className={styles.statusIndicator}>
              <div className={styles.statusDot}></div>
              <span>Available for new opportunities</span>
            </div>
            <p>
              Currently seeking full-time positions and interesting freelance projects. 
              Let's discuss how we can work together to create something amazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;