import styles from './Home.module.css'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer';
import { FaArrowUp, FaGithub, FaLinkedin, FaDownload, FaRocket } from 'react-icons/fa';
import { HiOutlineCode, HiOutlineLightBulb } from 'react-icons/hi';
import resume from '../../assets/Chris_Steffen_Resume.pdf';

const Home = () => {
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return ( 
    <>
      <section className={styles.hero} id='home'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>Chris Steffen</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              Full-Stack Software Engineer
            </h2>
            <p className={styles.heroDescription}>
              Transforming ideas into elegant digital solutions with modern web technologies. 
              From construction to code, I bring a unique perspective to software development.
            </p>
            <div className={styles.heroActions}>
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <FaRocket />
                View My Work
              </button>
              <a href="https://docs.google.com/document/d/135vuVJoC3ErVarGzMLxBiob3KqC-vZvvZpu8e7oYK0A/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button className={styles.buttonDownload}>View Resume</button>
</a>

            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/chrsteffen1" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/chris-steffen1/" className={styles.socialLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.codeTitle}>developer.js</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span> 
                  <span className={styles.variable}> developer</span> 
                  <span className={styles.operator}> = </span>
                  <span className={styles.bracket}>{'{'}</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  name:</span> 
                  <span className={styles.string}> 'Chris Steffen'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  skills:</span> 
                  <span className={styles.bracket}> [</span>
                  <span className={styles.string}>'React'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.string}>           'JavaScript'</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.string}>           'Python'</span>
                  <span className={styles.bracket}>]</span>,
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.property}>  passion:</span> 
                  <span className={styles.string}> 'Building amazing apps'</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.bracket}>{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <HiOutlineCode />
            </div>
            <h3>Clean Code</h3>
            <p>Writing maintainable, scalable code with best practices</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <HiOutlineLightBulb />
            </div>
            <h3>Problem Solver</h3>
            <p>Turning complex challenges into simple, elegant solutions</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaRocket />
            </div>
            <h3>Fast Learner</h3>
            <p>Constantly evolving with new technologies and frameworks</p>
          </div>
        </div>
      </section>

      <button className={styles.scrollToTop} onClick={handleClick}>
        <FaArrowUp />
      </button>

      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;