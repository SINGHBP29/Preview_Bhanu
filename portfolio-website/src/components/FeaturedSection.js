import React from 'react';
import '../styles/FeaturedSection.css';

function FeaturedSection() {
  return (
    <section className="featured-section">
      <h2 className="featured-title">AS FEATURED IN</h2>
      <div className="featured-logos">
        <div className="logo-item">
          <img src="/images/company-logos/hostinger.png" alt="Hostinger" />
        </div>
        <div className="logo-item">
          <img src="/images/company-logos/upwork.png" alt="Upwork" />
        </div>
        <div className="logo-item">
          <img src="/images/company-logos/career-foundry.png" alt="Career Foundry" />
        </div>
        <div className="logo-item">
          <img src="/images/company-logos/frontend-mentor.png" alt="Frontend Mentor" />
        </div>
        <div className="logo-item">
          <img src="/images/company-logos/wad.png" alt="We Are Developers" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;