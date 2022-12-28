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
    <section className={styles.carousel}>
    <h1 className={styles.title}>Projects</h1>
    <Carousel className={styles.container} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[0].image}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[1].image}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[2].image}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.carImage}
          src={projects[3].image}
          alt="Third slide"
        />
      </Carousel.Item> 
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

