import resume from '../../assets/Chris_Steffen_Resume.pdf'
import styles  from './Resume.module.css'

const Resume = () => {
  return ( 
    <>
      <h1>Resume</h1>
      <p> Click here to download my resume
        <a href={resume} download> <button class={styles.buttonDownload}>Download</button></a>
      </p>
    </>
  );
}

export default Resume;