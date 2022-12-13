import resume from '../../assets/Chris_Steffen_Resume.pdf'
import styles  from './Resume.module.css'

const Resume = () => {
  return ( 
    <section>
      <h1 id="resume">Resume</h1>
      <p> Click here to download my resume
        <a href={resume} download='Chris_Steffen_Resume'> <button className={styles.buttonDownload}>Download</button></a>
      </p>
    </section>
  );
}

export default Resume;