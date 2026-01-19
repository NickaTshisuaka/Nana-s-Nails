import React, { useState } from 'react';
import './Policies.css';

export default function Policies() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const OWNER_PHONE = "27743786209"; // Added country code for WhatsApp stability
  const OWNER_EMAIL = "christiankabuya75@gmail.com";

  const rules = [
    { 
      title: "Booking Deposits", 
      detail: "A small non-refundable deposit is required to secure your slot. This goes toward your final total." 
    },
    { 
      title: "House Service", 
      detail: "For mobile bookings, please ensure a clean, well-lit workspace is available for the best results." 
    },
    { 
      title: "Cancellations", 
      detail: "Life happens! Please let me know at least 24 hours in advance if you need to reschedule." 
    },
    { 
      title: "Arrival", 
      detail: "For studio visits, a 15-minute grace period is allowed. After that, we may need to adjust the set complexity." 
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    const message = `Hi Nana! I'd like to book an appointment.%0A%0A` +
                    `*Name:* ${data.name}%0A` +
                    `*Details:* ${data.details}`;

    window.open(`https://wa.me/${OWNER_PHONE}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="book" className="policies-section">
      <div className="policies-grid">
        <div className="policy-info">
          <span className="subtitle">Small Print, Big Respect</span>
          <h2>Studio Guidelines</h2>
          <div className="rules-container">
            {rules.map((rule, i) => (
              <div key={i} className="rule-box">
                <h4>{rule.title}</h4>
                <p>{rule.detail}</p>
              </div>
            ))}
          </div>
          <div className="direct-contact">
            <p>Questions? Email: <strong>{OWNER_EMAIL}</strong></p>
          </div>
        </div>

        <div className="booking-container">
          {submitted ? (
            <div className="thank-you-state">
              <h3>Message Sent!</h3>
              <p>I've opened WhatsApp for you. Please hit 'Send' on the message to start our chat!</p>
              <button className="back-btn" onClick={() => {setSubmitted(false); setShowForm(false);}}>Back to Home</button>
            </div>
          ) : !showForm ? (
            <div className="booking-cta">
              <span className="subtitle">Appointments</span>
              <h3>Let’s get you sorted.</h3>
              <p>Click below to start a WhatsApp chat. I’ll help you find the perfect time.</p>
              <button className="book-now-large" onClick={() => setShowForm(true)}>
                Inquire via WhatsApp
              </button>
            </div>
          ) : (
            <div className="booking-form-wrapper">
              <h3>Booking Inquiry</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="YOUR NAME" required />
                <textarea name="details" placeholder="WHICH SET ARE YOU LOOKING FOR? (E.G. PLAIN NAILS + HOUSE SERVICE)" required></textarea>
                
                <div className="form-footer">
                  <button type="submit" className="submit-btn">Open WhatsApp</button>
                  <button type="button" className="back-btn" onClick={() => setShowForm(false)}>CANCEL</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}