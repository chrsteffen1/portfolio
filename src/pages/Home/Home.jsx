// import Pic from '../../assets/profilePic.png'
import styles from './Home.module.css'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';



const Home = () => {
  
  return ( 
    <>
      <section className={styles.landing} id='home'>
          <div className={styles.circle}>
          <h1 className={styles.name}>Chris Steffen</h1>
          <h2 className={styles.subtitle}>Software Engineer</h2>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
    </>
  );
}

export default Home;