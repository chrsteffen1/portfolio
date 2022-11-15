import { projects } from "../../data/projects";
import ProjectList from "../../components/ProjectList";
import styles from './Projects.module.css'

const Projects = (props) => {
  return ( 
    <>
      <ProjectList projects={projects}/>
    </>
  );
}

export default Projects;