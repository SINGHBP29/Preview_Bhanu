// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from 'react';
// import './styles/App.css';
// import './styles/Background.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import FeaturedSection from './components/FeaturedSection';

// function App() {
//   useEffect(() => {
//     // Create the 3D cube programmatically for better control
//     const createCube = () => {
//       const geometryContainer = document.querySelector('.geometry-container');
//       const cube = document.createElement('div');
//       cube.className = 'cube';
      
//       // Positions for each face of the cube
//       const positions = [
//         { transform: 'translateZ(75px)' },
//         { transform: 'rotateY(180deg) translateZ(75px)' },
//         { transform: 'rotateY(90deg) translateZ(75px)' },
//         { transform: 'rotateY(-90deg) translateZ(75px)' },
//         { transform: 'rotateX(90deg) translateZ(75px)' },
//         { transform: 'rotateX(-90deg) translateZ(75px)' }
//       ];
      
//       // Create each face of the cube
//       positions.forEach(position => {
//         const face = document.createElement('div');
//         face.className = 'cube-face';
//         Object.assign(face.style, position);
//         cube.appendChild(face);
//       });
      
//       geometryContainer.appendChild(cube);
//     };
    
//     createCube();
    
//     // Optional: Create random floating particles for more visual interest
//     const createParticles = () => {
//       const geometryContainer = document.querySelector('.geometry-container');
//       const particleCount = 15;
      
//       for (let i = 0; i < particleCount; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'particle';
        
//         // Random styles for each particle
//         Object.assign(particle.style, {
//           position: 'absolute',
//           width: `${Math.random() * 10 + 2}px`,
//           height: `${Math.random() * 10 + 2}px`,
//           backgroundColor: 'rgba(255, 255, 255, 0.2)',
//           borderRadius: '50%',
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           animation: `float ${Math.random() * 15 + 5}s infinite ease-in-out`
//         });
        
//         geometryContainer.appendChild(particle);
//       }
//     };
    
//     createParticles();
    
//     // Add animation keyframes dynamically
//     const style = document.createElement('style');
//     style.innerHTML = `
//       @keyframes float {
//         0%, 100% { transform: translateY(0) translateX(0); }
//         50% { transform: translateY(-20px) translateX(10px); }
//       }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <div className="app">
//       <div className="background">
//         <div className="geometry-container">
//           {/* 3D elements will be added via JavaScript */}
//         </div>
//       </div>
//       <Header />
//       <main>
//         <Hero />
//         <FeaturedSection />
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/Background.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import CodeSnippet from './components/CodeSnippet';
// import FeaturedSection from './components/FeaturedSection';
import Contact from './components/Contact';
import AboutSection from './components/About';
import Projects from './components/project';
import PositionResponsibility from './components/por';
// import Chatbot from './components/chatbot';


function App() {
  useEffect(() => {
    // Create the 3D cube programmatically for better control
    const createCube = () => {
      const geometryContainer = document.querySelector('.geometry-container');
      if (!geometryContainer) return;
      
      const cube = document.createElement('div');
      cube.className = 'cube';
      
      // Positions for each face of the cube
      const positions = [
        { transform: 'translateZ(75px)' },
        { transform: 'rotateY(180deg) translateZ(75px)' },
        { transform: 'rotateY(90deg) translateZ(75px)' },
        { transform: 'rotateY(-90deg) translateZ(75px)' },
        { transform: 'rotateX(90deg) translateZ(75px)' },
        { transform: 'rotateX(-90deg) translateZ(75px)' }
      ];
      
      // Create each face of the cube
      positions.forEach(position => {
        const face = document.createElement('div');
        face.className = 'cube-face';
        Object.assign(face.style, position);
        cube.appendChild(face);
      });
      
      geometryContainer.appendChild(cube);
    };
    
    createCube();
    
    // Optional: Create random floating particles for more visual interest
    const createParticles = () => {
      const geometryContainer = document.querySelector('.geometry-container');
      if (!geometryContainer) return;
      
      const particleCount = 15;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random styles for each particle
        Object.assign(particle.style, {
          position: 'absolute',
          width: `${Math.random() * 10 + 2}px`,
          height: `${Math.random() * 10 + 2}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 15 + 5}s infinite ease-in-out`
        });
        
        geometryContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Add animation keyframes dynamically
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-20px) translateX(10px); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="app">
      <div className="background">
        <div className="geometry-container">
          {/* 3D elements will be added via JavaScript */}
        </div>
      </div>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Experience />
        <CodeSnippet />
        <PositionResponsibility />
        <Projects />
        {/* <FeaturedSection /> */}
        <Contact />
        {/* <Chatbot/> */}
      </main>
    </div>
  );
}

export default App;