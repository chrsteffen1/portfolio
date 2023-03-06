import { projects } from "../../data/projects";
import styles from './Projects.module.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Projects = (props) => {
  const [index, setIndex] = useState(0);    

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( 
    <section className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <Carousel className={styles.container} activeIndex={index} onSelect={handleSelect}>
        {projects.map((project, i) => (
          <Carousel.Item key={i}>
            <img
              className={styles.image}
              src={project.image}
              alt={project.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.caption}>
        <h3>{projects[index].title}</h3>
      </div>
      <div className={styles.caption}>
        <Button variant="secondary"><a href={projects[index].repositoryLink}>Github</a></Button>
        <Button variant="secondary"><a href={projects[index].deploymentLink}>Link</a></Button>
      </div>
    </section>
  );
}

export default Projects;

