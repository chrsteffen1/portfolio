import styles from './Home.module.css'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer';
import { FaArrowUp } from 'react-icons/fa';



const Home = () => {
  
  const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return ( 
    <>
      <section className={styles.landing} id='home'>
        <div className={styles.circle}>
        <h1 className={styles.name}>Chris Steffen</h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
        </div>
      </section>
      <button className={styles.button} onClick={handleClick}>
      <FaArrowUp className={styles.icon} />
    </button>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;