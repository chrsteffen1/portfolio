import { useParams } from "react-router-dom";
import { findProject } from "../../utilities/findProject";
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  const { projectDetails } = useParams();
  let project = findProject(projectDetails)

  return (  
    <div >
      <div className={styles.details}>
        <h1 className={styles.title}>{project.title}</h1>
      </div>
      <div className={styles.details}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <p className={styles.description}>{project.description}</p>
      </div>
      <div className={styles.details}>        
        <a href={project.repositoryLink} className={styles.git}><button>GitHub</button></a>
        <a href={project.deploymentLink} className={styles.link}><button>Link</button></a> 
      </div>
    </div>
  );
}

export default ProjectDetails;

