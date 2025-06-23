import { projects } from "../../data/projects";
import styles from './Projects.module.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return ( 
    <section className={`${styles.projects} section`} id='projects'>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className={styles.projectShowcase}>
          <div className={styles.projectMain}>
            <div className={styles.projectImage}>
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
              />
              <div className={styles.projectOverlay}>
                <div className={styles.projectActions}>
                  <a 
                    href={projects[currentProject].repositoryLink}
                    className={`${styles.projectBtn} ${styles.btnSecondary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    Code
                  </a>
                  <a 
                    href={projects[currentProject].deploymentLink}
                    className={`${styles.projectBtn} ${styles.btnPrimary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>
                {projects[currentProject].title}
              </h3>
              <p className={styles.projectDescription}>
                {projects[currentProject].description}
              </p>
              
              <div className={styles.projectNavigation}>
                <button 
                  className={styles.navBtn}
                  onClick={prevProject}
                  aria-label="Previous project"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                
                <div className={styles.projectIndicators}>
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.indicator} ${
                        index === currentProject ? styles.active : ''
                      }`}
                      onClick={() => goToProject(index)}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  className={styles.navBtn}
                  onClick={nextProject}
                  aria-label="Next project"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.projectCard} ${
                  index === currentProject ? styles.active : ''
                }`}
                onClick={() => goToProject(index)}
              >
                <div className={styles.cardImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{project.title}</h4>
                  <p className={styles.cardDescription}>
                    {project.description.substring(0, 80)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;