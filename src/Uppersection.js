// HeroSection.js

import React from 'react';
import Navbar from './Navbar';

const UpperSection = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-content">
        <h1>Grow Your Skill To <br></br>
            Advance Your Career Path</h1>
        <div className="hero-details">
          <p>No Credit Card Required | 7 Days Trial | Free For Teachers</p>
          <button className="get-started-button">Get Started Now</button>
          

          </div>
      </div>
      
    </div>
    


  );
}

export default UpperSection;
