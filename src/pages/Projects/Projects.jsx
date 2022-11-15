import { projects } from "../../data/projects";
import ProjectList from "../../components/ProjectList";
import styles from './Projects.module.css'

const Projects = (props) => {
  return ( 
    <>
    <div className={styles.list}>
      <ProjectList projects={projects}/>
    </div>
    </>
  );
}

export default Projects;