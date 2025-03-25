import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Bhanu Pratap <span className="highlight">Singh</span>._</a>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;