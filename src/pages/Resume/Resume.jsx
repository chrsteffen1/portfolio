// import React from "react";
import resume from '../../assets/resume.pdf'
// import { Document, Page, pdfjs } from "react-pdf";

const Resume = () => {
  return ( 
    <>
      <h1>Resume</h1>
      <a href={resume} download>Resume</a>
    </>
  );
}

export default Resume;