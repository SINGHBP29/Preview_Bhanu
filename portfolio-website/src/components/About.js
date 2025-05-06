import React from 'react';
import '../styles/about-section.css'; // Import the CSS file
import profileImage from '../Images/image.jpeg'

const AboutSection = () => {
  return (
    <div id="About" className="about-container">
      {/* Left content section */}
      <div className="about-content">
        <h2 className="about-title">WHO AM I?</h2>
        <p className="about-text"></p>
          <p className="about-text">
            My name is <span className="name-highlight">Bhanu Pratap Singh</span>. I am a passionate AI Engineer and Data Scientist with expertise in machine learning, deep learning, and Generative AI. My work focuses on developing cutting-edge AI applications, LLM-powered automation systems, and intelligent data-driven solutions that enhance efficiency and decision-making.
            I have built and deployed AI-powered chatbots, resume analyzers and automated code review tools, leveraging advanced NLP and deep learning techniques. My technical proficiency includes Node.js, React, Docker, and full-stack AI deployment, allowing me to create scalable and production-ready AI systems.
            Driven by curiosity and innovation, 
            I am committed to pushing the boundaries of AI and transforming complex challenges into impactful solutions.
          </p>
          
          <div className="education-section">
            <p className="education-title">Currently pursuing:</p>
            <ul className="education-list">
          <li className="education-item">B.Tech from MNNIT Allahabad</li>
          <li className="education-item">B.S. in Data Science from IIT Madras</li>
            </ul>
          </div>
          
          <div className="projects-section">
            <p className="projects-title">Featured Projects:</p>
            <ul className="projects-list">
              <li className="project-item">
                <span className="project-title">AI-Based Resume Analyzer & Job Recommendation System</span>
                <span className="project-description">Enhancing job matching using ML.</span>
              </li>
              <li className="project-item">
                <span className="project-title">AI-Powered Code Review System</span>
                <span className="project-description">Built with Google Gemini AI for automated code analysis.</span>
              </li>
              <li className="project-item">
                <span className="project-title">NLP-Based Chatbot</span>
                <span className="project-description">Developed with RASA, OpenAI API, and advanced NLP techniques.</span>
              </li>
              <li className="project-item">
                <span className="project-title">E-Commerce Platform</span>
                <span className="project-description">Engineered with Django for seamless user experience.</span>
              </li>
            </ul>
          </div>


          <div className="resume-section">
            <p className="resume-title">Download My Resume:</p>
            <a 
          href="https://drive.google.com/file/d/1Lp0Tt0aWfMwG8nyptwPJsCSFEyuaa1ue/view?usp=sharing" 
          className="resume-download-link" 
          target="_blank" 
          rel="noopener noreferrer"
            >
          <button className="resume-download-button">Download Resume</button>
            </a>
          </div>
        </div>
        
        {/* Right image section */}
      <div className="image-section">
        <div className="image-container">
          <div className="profile-image">
            <img 
              src={profileImage}
              alt="Bhanu Pratap Singh" 
            />
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-text">
            ABOUT ME
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
