import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>NANA'S NAIL</h2>
          <p>& Beauty Care</p>
          <span className="footer-tagline">Defining elegance through precision.</span>
        </div>
        
        <div className="footer-info">
          <div className="info-group">
            <h4>Location</h4>
            <p>Johannesburg, GP</p>
            <p className="highlight">Mobile House Services Available</p>
          </div>
          <div className="info-group">
            <h4>Connect</h4>
            <p>074 378 6209</p>
            <p>christiankabuya75@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Nana's Nail & Beauty Care. All Rights Reserved.</p>
      </div>
    </footer>
  );
}