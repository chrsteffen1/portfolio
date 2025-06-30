import { useState, useEffect } from 'react';
import { SiJavascript, SiReact, SiPython, SiTypescript, SiNodedotjs, SiMongodb, SiExpress, SiHtml5, SiCss3, SiGit } from 'react-icons/si';
import styles from './SkillsShowcase.module.css';

const SkillsShowcase = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 90, category: 'Frontend' },
    { name: 'React', icon: SiReact, color: '#61dafb', level: 85, category: 'Frontend' },
    { name: 'Python', icon: SiPython, color: '#3776ab', level: 80, category: 'Backend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 75, category: 'Frontend' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 80, category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248', level: 75, category: 'Database' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', level: 80, category: 'Backend' },
    { name: 'HTML5', icon: SiHtml5, color: '#e34f26', level: 95, category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572b6', level: 90, category: 'Frontend' },
    { name: 'Git', icon: SiGit, color: '#f05032', level: 85, category: 'Tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, skillIndex]);
            }, skillIndex * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('[data-skill]');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className={styles.skillsShowcase}>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            data-skill
            data-index={index}
            className={`${styles.skillCard} ${visibleSkills.includes(index) ? styles.visible : ''}`}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={styles.skillIcon} style={{ color: skill.color }}>
              <skill.icon />
            </div>
            <div className={styles.skillInfo}>
              <h4 className={styles.skillName}>{skill.name}</h4>
              <span className={styles.skillCategory}>{skill.category}</span>
              <div className={styles.skillLevel}>
                <div className={styles.levelBar}>
                  <div 
                    className={styles.levelFill}
                    style={{ 
                      width: visibleSkills.includes(index) ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color 
                    }}
                  />
                </div>
                <span className={styles.levelText}>{skill.level}%</span>
              </div>
            </div>
            {hoveredSkill === skill.name && (
              <div className={styles.skillTooltip}>
                <p>Proficiency: {skill.level}%</p>
                <p>Category: {skill.category}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.categoryFilter}>
        <h4>Filter by Category:</h4>
        <div className={styles.filterButtons}>
          <button 
            className={`${styles.filterBtn} ${styles.active}`}
            onClick={() => {/* Show all */}}
          >
            All
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className={styles.filterBtn}
              onClick={() => {/* Filter by category */}}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;