import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import NavBar from './components/NavBar';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import { projects } from './data/projects';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectDetails' element={<ProjectDetails projects={projects}/>}/>
      </Routes>
    </>
  );
}

export default App;
