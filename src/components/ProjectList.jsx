const ProjectList = (props) => {
  return (  
    <>
      <h1>Projects</h1>
      {props.projects.map((project, idx) => (
        <div key={idx}>
          <ul>
            <li>
              <div>
                <img src={project.image} alt={project.title} />
                <section>
                  <h3>{project.title}</h3>
                  <a href={project.deploymentLink} target="_blank" rel='noreferrer'><button>{project.title}</button></a>
                </section>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default ProjectList;