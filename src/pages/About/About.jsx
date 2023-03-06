import styles from './About.module.css'
import Pic from '../../assets/profilePic.jpeg'

const About = () => {
  return ( 
    <div className={styles.about} id='about'>
      <img className={styles.image} src={Pic} alt="" />
      <div className={styles.info}>
        <div class="about-me">
          <h2>About Me</h2>
          <br />
          <p>Hi, I'm <strong>Chris Steffen</strong>, a software developer who recently transitioned from a career in construction to pursue my passion for coding. I attended General Assembly's coding boot camp, where I gained hands-on experience in building web and mobile applications using a variety of programming languages and technologies.</p>
          <p>Although my background is in construction, I've always been interested in technology and enjoyed tinkering with gadgets and software in my spare time. I decided to make a career change because I was excited about the endless possibilities that coding offers for solving problems and creating innovative solutions.</p>
          <p>As a self-motivated learner, I'm constantly seeking out new challenges and opportunities to grow my skills. I'm proficient in <strong>JavaScript, React.js, Python, TypeScript</strong>, and I'm eager to continue learning and expanding my knowledge.</p>
          <p>Outside of work, you can find me playing volleyball or basketball with my friends, hitting the slopes for some snowboarding, or working on woodworking projects in my grandfather's garage. I also enjoy exploring the great outdoors and going on hikes to take in the beauty of nature. In my downtime, I like to unwind by playing video games and immersing myself in new virtual worlds.</p>
          <p>I believe that my experience in construction has taught me valuable skills that I can apply to my work as a software developer, such as problem-solving, attention to detail, and collaboration. My goal is to build software that not only meets technical requirements but also exceeds user expectations in terms of usability and user experience.</p>
        </div>

      </div>         
    </div>
  );
}

export default About;