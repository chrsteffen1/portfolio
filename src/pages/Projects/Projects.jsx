import { projects } from "../../data/projects";
import styles from './Projects.module.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Projects = (props) => {
  const [index, setIndex] = useState(0);    

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( 
    <section className={styles.projects} id='projects'>
      <h1 className={styles.title}>Projects</h1>
      <Carousel className={styles.container} activeIndex={index} onSelect={handleSelect}>
        {projects.map((project, i) => (
          <Carousel.Item key={i}>
            <img
              className={styles.image}
              src={project.image}
              alt={project.title}
            />
            <Carousel.Caption className={styles.carouselCaption}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.caption}>
        <Button variant="dark" className={styles.button} href={projects[index].repositoryLink}>
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        Github
        </Button>
        <Button variant="dark" className={styles.button} href={projects[index].deploymentLink}>
        <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
        Live Website
        </Button>
      </div>
    </section>
  );
}

export default Projects;

