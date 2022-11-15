import resume from '../../assets/Chris_Steffen_Resume.pdf'

const Resume = () => {
  return ( 
    <>
      <h1>Resume</h1>
      <p>
        <a href={resume} download>Resume</a>
      </p>
    </>
  );
}

export default Resume;