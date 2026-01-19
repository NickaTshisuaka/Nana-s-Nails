import React, { useState, useEffect } from 'react';
import { db, reviewsCollection } from '../firebase';
import { addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import './Reviews.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", rating: 0, comment: "" });

  // 1. Listen to Real-time Updates from Firebase
  useEffect(() => {
    const q = query(reviewsCollection, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  // 2. Add Review to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.rating === 0) return alert("Please select a rating!");

    try {
      await addDoc(reviewsCollection, {
        ...formData,
        timestamp: new Date(),
        date: new Date().toLocaleDateString()
      });
      setShowForm(false);
      setFormData({ name: "", email: "", rating: 0, comment: "" });
    } catch (err) {
      console.error("Error adding review: ", err);
    }
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="section-header">
        <span className="subtitle">Wall of Love</span>
        <h2>Client Reviews</h2>
      </div>

      <div className="reviews-container">
        {reviews.map((rev, i) => (
          <div key={i} className="review-card">
            <div className="card-accent"></div>
            <div className="stars-display">
              {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
            </div>
            <p className="review-text">"{rev.comment}"</p>
            <div className="reviewer-info">
              <span className="rev-name">{rev.name}</span>
              <span className="rev-date">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="review-action-area">
        {!showForm ? (
          <button className="write-review-trigger" onClick={() => setShowForm(true)}>
            Write a Review <span className="arrow">→</span>
          </button>
        ) : (
          <form className="review-form-overlay" onSubmit={handleSubmit}>
            <h3>How was your experience?</h3>
            
            {/* Centered Large Stars */}
            <div className="star-selector-centered">
              {[1, 2, 3, 4, 5].map(num => (
                <span 
                  key={num} 
                  onClick={() => setFormData({...formData, rating: num})}
                  className={formData.rating >= num ? "star gold" : "star empty"}
                >
                  {formData.rating >= num ? "★" : "☆"}
                </span>
              ))}
            </div>

            <div className="input-row">
              <input 
                type="text" 
                placeholder="Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>

            <textarea 
              placeholder="Your feedback means the world to us..." 
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
              required
            ></textarea>

            <div className="form-footer">
              <button type="submit" className="post-btn">Submit Review</button>
              <button type="button" className="cancel-link" onClick={() => setShowForm(false)}>Maybe later</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}