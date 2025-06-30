export const projects = [
  { 
    title: 'TicTacToe', 
    description: 'An alien themed tic tac toe game featuring smooth animations, AI opponent, and responsive design. Built with vanilla JavaScript and CSS animations to create an engaging gaming experience.', 
    image: 'https://i.imgur.com/USSBjvH.png', 
    repositoryLink: 'https://github.com/chrsteffen1/ttt-weekend', 
    deploymentLink: 'https://chris-steffen-ttt-weekend.netlify.app/',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
    status: 'live',
    featured: true
  },
  { 
    title: 'Classic Snake Game', 
    description: 'A modern take on the classic snake game with retro arcade aesthetics, high score tracking, and progressive difficulty. Features smooth gameplay mechanics and pixel-perfect collision detection.', 
    image: 'https://i.imgur.com/5AAxLIa.png', 
    repositoryLink: 'https://github.com/chrsteffen1/Snake-Game', 
    deploymentLink: 'https://classic-snake-game-ga.netlify.app/',
    technologies: ['JavaScript', 'Canvas API', 'CSS3', 'Local Storage'],
    status: 'live',
    featured: true
  },
  { 
    title: 'Pokemon Team Tracker', 
    description: 'A comprehensive MEN stack application for tracking Pokemon team compositions across different game playthroughs. Features user authentication, team management, and detailed Pokemon statistics.', 
    image: 'https://i.imgur.com/AQP3mW9.png', 
    repositoryLink: 'https://github.com/chrsteffen1/Pokemon-Team-Tracker', 
    deploymentLink: 'https://pokemon-team-tracker.fly.dev/profiles',
    technologies: ['MongoDB', 'Express.js', 'Node.js', 'EJS', 'Passport.js'],
    status: 'live',
    featured: true
  },
  { 
    title: 'Fit - Fitness Planner', 
    description: 'A collaborative MERN stack fitness application for tracking weekly goals and meal planning. Integrates with Edamam API for nutritional data and features real-time progress tracking and team collaboration tools.', 
    image: 'https://i.imgur.com/OfzUIGM.png', 
    repositoryLink: 'https://github.com/chrsteffen1/Fit-app-front-end', 
    deploymentLink: 'https://fit-planner.netlify.app/',
    technologies: ['React', 'MongoDB', 'Express.js', 'Node.js', 'Edamam API'],
    status: 'live',
    featured: true
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Helper function to get projects by technology
export const getProjectsByTechnology = (tech) => {
  return projects.filter(project => 
    project.technologies.some(technology => 
      technology.toLowerCase().includes(tech.toLowerCase())
    )
  );
};

// Helper function to get live projects
export const getLiveProjects = () => {
  return projects.filter(project => project.status === 'live');
};