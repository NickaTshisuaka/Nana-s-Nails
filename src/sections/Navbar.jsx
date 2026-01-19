import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">NANA'S NAILS</div>
      
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#work" onClick={() => setIsOpen(false)}>Gallery</a>
        <a href="#book" className="nav-cta" onClick={() => setIsOpen(false)}>Book Now</a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar active" : "bar"}></span>
        <span className={isOpen ? "bar active" : "bar"}></span>
      </div>
    </nav>
  );
}