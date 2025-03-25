import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <ul>
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}><span className="nav-number">01</span> // home</a></li>
        <li><a href="#About" onClick={(e) => handleNavClick(e, 'About')}><span className="nav-number">02</span> // About</a></li>
        <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}><span className="nav-number">03</span> // experience</a></li>
        <li><a href="#work" onClick={(e) => handleNavClick(e, 'projects')}><span className="nav-number">04</span> // work</a></li>
        <li><a href="#code-snippet" onClick={(e) => handleNavClick(e, 'por')}><span className="nav-number">05</span> // POR</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}><span className="nav-number">06</span> // contact</a></li>
        
      </ul>
    </nav>
  );
}

export default Navigation;