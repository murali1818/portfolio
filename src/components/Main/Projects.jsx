import React, { useState } from 'react';

const projects = [
  {
    name: 'Authentication',
    description: 'Login and signup with password encryption and token stored in cookies.',
    github: 'https://github.com/murali1818/Authentication.git',
    demo: 'https://project-one-demo.com',
    image: './images/login.png'
  },
  {
    name: 'TaskManager',
    description: 'Managing tasks.',
    github: 'https://github.com/murali1818/TaskManager.git',
    demo: 'https://taskmanager-demo.com',
    image: './images/tm.png'
  },
  {
    name: 'Bitweb',
    description: 'A web-based bidding application enabling users to sell and purchase products through auctions. Developed complete functionality for both selling and bidding processes.',
    github: 'https://github.com/murali1818/Bitweb.git',
    demo: 'https://bitweb-demo.com',
    image: './images/bit.png'
  },
  {
    name: 'SS-Media',
    description: 'An online e-learning platform where learners can enroll in and access courses, while instructors manage their content and track progress, fostering an interactive educational environment.',
    github: 'https://github.com/murali1818/SS-Media.git',
    demo: 'https://ssmedia-demo.com',
    image: './images/ss.png'
  },
];

const Projects = () => {
  const [currentProjects, setCurrentProjects] = useState([0, 1]);
  const [animation, setAnimation] = useState('');

  const handlePrev = () => {
    setAnimation('slide-out-left');
    setTimeout(() => {
      setCurrentProjects(currentProjects.map(index => (index - 1 + projects.length) % projects.length));
      setAnimation('slide-in-right');
    }, 300); // Animation duration
  };

  const handleNext = () => {
    setAnimation('slide-out-right');
    setTimeout(() => {
      setCurrentProjects(currentProjects.map(index => (index + 1) % projects.length));
      setAnimation('slide-in-left');
    }, 300); // Animation duration
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-about-bg bg-cover bg-center bg-opacity-20">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-6 md:p-20 bg-black bg-opacity-40 ">
        <h1 className="lg:text-5xl text-3xl font-bold text-white mb-5">Projects</h1>
        <div className="flex flex-col sm:flex-row justify-between w-full max-w-5xl space-y-6 sm:space-y-0 sm:space-x-6">
          <button
            className="text-gray-50 bg-transparent px-4 py-2 rounded"
            onClick={handlePrev}
          >
            &larr; Prev
          </button>
          <div className={`grid grid-row-2 md:grid-cols-2 md:gap-5 justify-center items-center ${animation}`}>
            {currentProjects.map(index => (
              <div key={index} className="relative group w-60 sm:w-96 h-40 sm:h-64 mb-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg shadow-black transform transition-all duration-300 hover:scale-105">
                <img src={projects[index].image} alt={projects[index].name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-2 text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{projects[index].name}</h2>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{projects[index].name}</h2>
                  <p className="text-white mb-4 text-sm sm:text-base p-3">{projects[index].description}</p>
                  <div className="flex space-x-4">
                    <a href={projects[index].github} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-gray-100 rounded-lg p-1 sm:p-2">GitHub</a>
                    <a href={projects[index].demo} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-gray-100 rounded-lg p-1 sm:p-2">Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="text-gray-50 bg-transparent px-4 py-2 rounded"
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
