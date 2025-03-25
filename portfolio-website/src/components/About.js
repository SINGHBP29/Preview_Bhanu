import React from 'react';
import '../styles/about-section.css'; // Import the CSS file
import profileImage from '../Images/image.jpeg'

const AboutSection = () => {
  return (
    <div id="About" className="about-container">
      {/* Left content section */}
      <div className="about-content">
        <h2 className="about-title">WHO I AM?</h2>
        <p className="about-text"></p>
          <p className="about-text">
            My name is <span className="name-highlight">Bhanu Pratap Singh</span>. I am a professional and
            enthusiastic programmer in my daily life. I am a quick learner
            with a self-learning attitude. I love to learn and explore new
            technologies and am passionate about problem-solving. I love
            almost all the stacks of web application development and love
            to make the web more open to the world. My core skills are
            based on Python, C++, SQL, and JavaScript. I am available for any kind of job opportunity that
            suits my skills and interests.
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
          <li className="project-item">✅ <span className="project-title">AI-Based Resume Analyzer & Job Recommendation System</span> – Enhancing job matching using ML.</li>
          <li className="project-item">✅ <span className="project-title">AI-Powered Code Review System</span> – Built with Google Gemini AI for automated code analysis.</li>
          <li className="project-item">✅ <span className="project-title">NLP-Based Chatbot</span> – Developed with RASA, OpenAI API, and advanced NLP techniques.</li>
          <li className="project-item">✅ <span className="project-title">E-Commerce Platform</span> – Engineered with Django for seamless user experience.</li>
            </ul>
          </div>

          <div className="resume-section">
            <p className="resume-title">Download My Resume:</p>
            <a 
          href="https://drive.google.com/file/d/1haWZfSv5ftxGqJ1su9Uh7XMXoVUSpOfn/view?usp=sharing" 
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