import { useParams } from "react-router-dom";
import { findProject } from "../../utilities/findProject";
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  const { projectDetails } = useParams();
  let project = findProject(projectDetails)

  return (  
    <div className={styles.details}>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <img src={project.image} alt={project.title} />
    <br />
    <a href={project.repositoryLink}><button>GitHub</button></a>
    <a href={project.deploymentLink}><button>Link</button></a> 
    </div>
  );
}

export default ProjectDetails;

