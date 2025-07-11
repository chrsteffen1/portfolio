import { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import { useNetlifyProjects, mergeWithNetlifyData } from "../../hooks/useNetlifyProjects";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import ProjectCard from "../../components/ProjectCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faRocket, faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [displayProjects, setDisplayProjects] = useState([]);
  const { netlifyProjects, loading: netlifyLoading } = useNetlifyProjects();
  const { elementRef, hasIntersected } = useIntersectionObserver();

  useEffect(() => {
    let filteredProjects = [...projects];

    // Merge with Netlify data if available
    if (netlifyProjects.length > 0) {
      filteredProjects = mergeWithNetlifyData(projects, netlifyProjects);
    }

    // Apply filters
    if (filter !== 'all') {
      if (filter === 'featured') {
        filteredProjects = filteredProjects.filter(p => p.featured);
      } else if (filter === 'live') {
        filteredProjects = filteredProjects.filter(p => p.status === 'live');
      } else {
        // Filter by technology
        filteredProjects = filteredProjects.filter(p => 
          p.technologies.some(tech => 
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );
      }
    }

    // Apply sorting
    if (sortBy === 'featured') {
      filteredProjects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === 'recent') {
      filteredProjects.sort((a, b) => {
        const aDate = a.netlifyData?.lastUpdated || '2024-01-01';
        const bDate = b.netlifyData?.lastUpdated || '2024-01-01';
        return new Date(bDate) - new Date(aDate);
      });
    }

    setDisplayProjects(filteredProjects);
  }, [filter, sortBy, netlifyProjects]);

  const technologies = [...new Set(projects.flatMap(p => p.technologies))];

  const stats = {
    total: projects.length,
    live: projects.filter(p => p.status === 'live').length,
    featured: projects.filter(p => p.featured).length,
    technologies: technologies.length
  };

  return ( 
    <section className={`${styles.projects} section`} id='projects' ref={elementRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Project Stats */}
        <div className={`${styles.statsGrid} ${hasIntersected ? styles.visible : ''}`}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className={styles.statContent}>
              <h3>{stats.total}</h3>
              <p>Total Projects</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <div className={styles.statContent}>
              <h3>{stats.live}</h3>
              <p>Live Projects</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
            <div className={styles.statContent}>
              <h3>{stats.featured}</h3>
              <p>Featured</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <div className={styles.statContent}>
              <h3>{stats.technologies}</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className={styles.controls}>
          <div className={styles.filterSection}>
            <h4>Filter by:</h4>
            <div className={styles.filterButtons}>
              <button 
                className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button 
                className={`${styles.filterBtn} ${filter === 'featured' ? styles.active : ''}`}
                onClick={() => setFilter('featured')}
              >
                Featured
              </button>
              <button 
                className={`${styles.filterBtn} ${filter === 'live' ? styles.active : ''}`}
                onClick={() => setFilter('live')}
              >
                Live Projects
              </button>
              {technologies.slice(0, 4).map(tech => (
                <button 
                  key={tech}
                  className={`${styles.filterBtn} ${filter === tech ? styles.active : ''}`}
                  onClick={() => setFilter(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.sortSection}>
            <h4>Sort by:</h4>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="featured">Featured First</option>
              <option value="recent">Recently Updated</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Netlify Integration Status */}
        {netlifyLoading && (
          <div className={styles.netlifyStatus}>
            <LoadingSpinner size="small" />
            <span>Syncing with Netlify...</span>
          </div>
        )}

        {netlifyProjects.length > 0 && (
          <div className={styles.netlifyStatus}>
            <div className={styles.netlifyBadge}>
              <span>🚀 Live data from Netlify</span>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {displayProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {displayProjects.length === 0 && !netlifyLoading && (
          <div className={styles.noProjects}>
            <p>No projects found matching your criteria.</p>
            <button 
              className="btn btn-primary"
              onClick={() => setFilter('all')}
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;