import styles from './About.module.css'
import Pic from '../../assets/profilePic.jpeg'
import { HiOutlineCode, HiOutlineDesktopComputer, HiOutlineDatabase } from 'react-icons/hi';
import { SiJavascript, SiReact, SiPython, SiTypescript, SiNodedotjs, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'Python', icon: SiPython, color: '#3776ab' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  ];

  return ( 
    <section className={`${styles.about} section`} id='about'>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <div className={styles.imageWrapper}>
              <img src={Pic} alt="Chris Steffen" />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
          
          <div className={styles.aboutText}>
            <div className={styles.intro}>
              <h3>From Construction to Code</h3>
              <p>
                Hi, I'm <strong>Chris Steffen</strong>, a passionate software developer who made the exciting transition from construction to coding. After completing General Assembly's intensive coding bootcamp, I discovered my true calling in creating digital solutions that make a real impact.
              </p>
            </div>

            <div className={styles.journey}>
              <p>
                My background in construction taught me invaluable skills that I bring to software development: <strong>problem-solving under pressure</strong>, <strong>attention to detail</strong>, and <strong>collaborative teamwork</strong>. These experiences shaped my approach to building robust, user-focused applications.
              </p>
              
              <p>
                As a self-motivated learner, I'm constantly exploring new technologies and pushing the boundaries of what's possible. I believe in writing clean, maintainable code that not only meets technical requirements but creates exceptional user experiences.
              </p>
            </div>

            <div className={styles.personal}>
              <h4>Beyond the Code</h4>
              <p>
                When I'm not coding, you'll find me on the volleyball or basketball court, carving down snowy slopes, or crafting something beautiful in my grandfather's woodworking shop. I also love exploring nature through hiking and diving into immersive gaming worlds.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillIcon} style={{ color: skill.color }}>
                  <skill.icon />
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <HiOutlineCode />
            </div>
            <h4>Full-Stack Development</h4>
            <p>Building end-to-end applications with modern frameworks and best practices</p>
          </div>
          
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <HiOutlineDesktopComputer />
            </div>
            <h4>Responsive Design</h4>
            <p>Creating beautiful, accessible interfaces that work seamlessly across all devices</p>
          </div>
          
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <HiOutlineDatabase />
            </div>
            <h4>Database Design</h4>
            <p>Architecting efficient data structures and optimizing application performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;