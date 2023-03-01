// import Pic from '../../assets/profilePic.png'
import styles from './Home.module.css'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';



const Home = () => {
  
  return ( 
    <div className={styles.home}>
      <div className={styles.landing} id='home'>
        <div className={styles.circle}>    
          <h1 className={styles.name}>Chris Steffen</h1>
          <h2>Software Engineer</h2>

        </div>
      </div>   

      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;