import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text-side">
          <span className="hero-badge">Est. 2026</span>
          <h1 className="hero-title">
            Artistry in <br /> 
            <span className="accent-text">Every Detail</span>
          </h1>
          <p className="hero-description">
            Experience bespoke nail care designed for the modern woman. 
            Where precision meets the serenity of cloud-soft aesthetics.
          </p>
          <div className="hero-actions">
            <a href="#book" className="btn-primary">Book Your Set</a>
            <a href="#work" className="btn-secondary">View Gallery</a>
          </div>
        </div>
        
        <div className="hero-image-side">
          <div className="main-image-wrapper">
             {/* Replace with a high-end shot of a hand with gold jewelry/cloud blue nails */}
            <img src="heroIMG.jpg" alt="Luxury Nail Art" className="hero-main-img" />
            <div className="gold-accent-box"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative background element to break the "empty" feel */}
      <div className="hero-bg-accent"></div>
    </section>
  );
};

export default Hero;