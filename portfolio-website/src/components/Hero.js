import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Bhanu Pratap Singh</h1>
        <p className="hero-subtitle">Software Engineer | Data Scientist | Frontend & Backend Developer.</p>
        <div className="scroll-indicator">
          <div className="scroll-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="#00FFFF" strokeWidth="2" />
              <path d="M8 12L12 16L16 12" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;