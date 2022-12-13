import { projects } from "../../data/projects";
// import ProjectList from "../../components/ProjectList";
import styles from './Projects.module.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = (props) => {


  return ( 
    <section className={styles.carousel}>
    {/* <div className={styles.list} id="projects">
      <ProjectList projects={projects}/>
    </div> */}
    <h1 className={styles.title}>Projects</h1>
    <Carousel className={styles.container}>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[0].image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{projects[0].title}</h3>
          <a href={projects[0].deploymentLink}>gitHub</a >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[1].image}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{projects[1].title}</h3>
          <a href={projects[1].deploymentLink}>gitHub</a >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[2].image}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>{projects[2].title}</h3>
          <a href={projects[2].deploymentLink}>gitHub</a >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[3].image}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{projects[3].title}</h3>
          <a href={projects[3].deploymentLink}>gitHub</a >
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
    {/* <div className={styles.project}>
      {projects.map(project =>
        <ul >
          <li className={styles.card}>{project.title}</li>
          <li className={styles.card}><img src={project.image} alt="" /></li>
          <li className={styles.card}>{project.description}</li>
          <li className={styles.card}><button><a href={project.repositoryLink}>GitHub</a></button></li>
          <li className={styles.card}><button><a href={project.deploymentLink}>Live site</a></button></li>          
        </ul>
        )}
    </div> */}
    </section>
  );
}

export default Projects;

