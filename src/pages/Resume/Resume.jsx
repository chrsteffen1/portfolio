import styles  from './Resume.module.css'

const Resume = () => {
  return (
    <section>
      <h1 id="resume">Resume</h1>
      <p>Click here to view my resume<a href="https://docs.google.com/document/d/135vuVJoC3ErVarGzMLxBiob3KqC-vZvvZpu8e7oYK0A/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><button className={styles.buttonDownload}>View Resume</button></a>
      </p>
    </section>
  );
}

export default Resume;
