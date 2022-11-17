import { Link } from "react-router-dom";

const NavBar = () => {
  return (  
    <nav>
      <Link to='/'>Chris Steffen</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/projects'>Projects </Link>
      <Link to='/resume'>Resume</Link>
    </nav>
  );
}

export default NavBar;