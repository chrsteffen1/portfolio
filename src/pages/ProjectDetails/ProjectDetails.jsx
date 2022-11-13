import { projects } from "../../data/projects";

const ProjectDetails = () => {
  return (  
    <>
    <h1>{projects[0].title}</h1>
    <p>{projects[0].description}</p>
    <img src={projects[0].image} alt={projects[0].title} />
    <br />
    <a href={projects[0].repositoryLink}><button>GitHub</button></a>
    <a href={projects[0].deploymentLink}> <button>Link</button></a>
    </>
  );
}

export default ProjectDetails;