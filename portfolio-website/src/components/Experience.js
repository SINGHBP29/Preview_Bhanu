import React from 'react';
import '../styles/Experience.css';

function Experience() {
  // Experience data
  const experiences = [
    {
      period: "(Jun 2025 - Present)",
      title: "Associate Data Science Intern",
      organization: "Delphi Consulting (Middle East) – Remote (UAE)",
      icon: "user-icon" // Replace with actual icon if available
    },
    {
      period: "(1 May 2024 - 30 May 2024)",
      title: "Data Scientist Intern",
      organization: "CashCry",
      icon: "user-icon"
    },
    {
      period: "(1 May 2022 - 30 May 2022)",
      title: "Research & Development Intern (Trainee)",
      organization: "Tropilite Bioflex Foods Pvt. Ltd.",
      icon: "user-icon"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-content">
        <div className="experience-illustration">
          <div className="laptop-container">
            <div className="laptop">
              <div className="laptop-screen">
                <div className="code-lines"></div>
              </div>
              <div className="laptop-keyboard"></div>
            </div>
            <div className="coffee-cup">
              <div className="cup-glow"></div>
            </div>
          </div>
        </div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-period">{exp.period}</div>
              <div className="experience-details">
                <div className="experience-icon">
                  <div className={exp.icon}></div>
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-organization">{exp.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
