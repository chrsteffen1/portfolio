import Pic from '../../assets/profilePic.jpeg'
import styles from './Home.module.css'

const Home = () => {
  return ( 
    <>
      <h1>Chris Steffen</h1>
      <img className={styles.image} src={Pic} alt="" />
    </>
  );
}

export default Home;