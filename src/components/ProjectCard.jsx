import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.projectCard} fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} />
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
          <div className={styles.actions}>
            <a 
              href={project.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.secondary}`}
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Code</span>
            </a>
            <a 
              href={project.deploymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.primary}`}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
        {project.featured && (
          <div className={styles.featuredBadge}>
            <FontAwesomeIcon icon={faRocket} />
            Featured
          </div>
        )}
        <div className={styles.statusBadge}>
          <div className={`${styles.statusDot} ${styles[project.status]}`}></div>
          {project.status}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.technologies}>
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.footer}>
          <div className={styles.links}>
            <a 
              href={project.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faCode} />
              Source
            </a>
            <a 
              href={project.deploymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faRocket} />
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;