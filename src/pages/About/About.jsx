import styles from './About.module.css'
import Pic from '../../assets/profilePic.jpeg'

const About = () => {
  return ( 
    <div className={styles.about} id='about'>
      <img className={styles.image} src={Pic} alt="" />
      <div className={styles.info}>
      <h1>About Chris</h1>
      <p>A Software Engineer with a background in construction I have always had a passion for creating and building. I take pride in my work and enjoy delivering high quality products. My interest in technology have led me to software engineering where I can create new and exciting things. 
      <br />
      <br />
      In my free time I enjoy woodworking, snowboarding, volleyball and marvel movies. <br />
      </p>
        </div>         
    </div>
  );
}

export default About;