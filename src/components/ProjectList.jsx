import ProjectPreview from "./ProjectPreview";
import styles from '../pages/ProjectDetails/ProjectDetails.module.css'

const ProjectList = (props) => {
  return (  
    <div  className={styles.details}>
      <h1>Projects</h1>
      {props.projects.map((project, idx) => (
        <div key={idx} className={styles.card}>
              <ProjectPreview title={project.title} image={project.image} git={project.repositoryLink}/>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;