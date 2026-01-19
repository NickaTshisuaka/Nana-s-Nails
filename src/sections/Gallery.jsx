import React, { useState } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const sets = [
    { urlA: 'set1a.jpeg', urlB: 'set1b.jpeg', title: 'Abstract Art Short' },
    { urlA: 'set2a.jpeg', urlB: 'set2b.jpeg', title: 'Stilleto Abstract Art' },
    { urlA: 'set3a.jpeg', urlB: 'set3b.jpeg', title: 'Minimalistic French Tips' },
    { urlA: 'set4a.jpeg', urlB: 'set4b.jpeg', title: 'Absctract Art Long' },
    { urlA: 'set5a.jpeg', urlB: 'set5b.jpeg', title: 'Fun Structured Gel' },
    { urlA: 'set6a.jpeg', urlB: 'set6b.jpeg', title: 'Solid Colour Application' },

  ];

  return (
    <section id="work" className="gallery-section">
      <div className="section-header">
        <span>Portfolio</span>
        <h2>Recent Works</h2>
        <p className="gallery-hint">Tap to view alternate angle</p>
      </div>

      <div className="gallery-grid">
        {sets.map((set, index) => (
          <div 
            key={index} 
            className={`gallery-item ${flippedIndex === index ? 'is-flipped' : ''}`}
            onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
          >
            <div className="image-container">
              <img src={set.urlA} alt={`${set.title} view A`} className="img-primary" loading="lazy" />
              <img src={set.urlB} alt={`${set.title} view B`} className="img-secondary" loading="lazy" />
            </div>
            
            <div className="overlay">
              <p>{set.title}</p>
              <span className="angle-indicator">Angle A/B</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}