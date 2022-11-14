import { projects } from "../../data/projects";
import { useParams } from "react-router-dom";
import { findProject } from "../../utilities/findProject";

const ProjectDetails = () => {
  const { projectDetails } = useParams();
  // const project = findProject(projects.title)
  // console.log(project)
  let project = findProject(projectDetails)
  console.log(project)

  return (  
    <>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
      
    {/* {projects.map((project) =>(
      if( project.title === projectDetails) {
        {project.title}
      }   
    ))} */}
    {/* <p>{projects.description}</p>
    <img src={projects.image} alt={projects.title} />
    <br />
    <a href={projects.repositoryLink}><button>GitHub</button></a>
    <a href={projects.deploymentLink}> <button>Link</button></a> */}
    </>
  );
}

export default ProjectDetails;

