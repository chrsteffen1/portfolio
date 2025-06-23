import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <a href="/" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Chris Steffen
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;