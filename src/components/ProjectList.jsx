import ProjectPreview from "./ProjectPreview";

const ProjectList = (props) => {
  return (  
    <>
      <h1>Projects</h1>
      {props.projects.map((project, idx) => (
        <div key={idx}>
          <ul>
            <li>
              <ProjectPreview title={project.title} image={project.image}/>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default ProjectList;