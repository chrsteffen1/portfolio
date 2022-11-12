import { projects } from "../../data/projects";
import ProjectList from "../../components/ProjectList";

const Projects = (props) => {
  return ( 
    <>
      <ProjectList projects={projects}/>
    </>
  );
}

export default Projects;