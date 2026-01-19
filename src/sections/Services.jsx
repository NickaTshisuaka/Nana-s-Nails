import './Services.css';

export default function Services() {
  const services = [
    { 
      name: "Plain and Toes", 
      price: "R200", 
      desc: "A complete matching set for both hands and feet." 
    },
    { 
      name: "French Manicure", 
      price: "R150", 
      desc: "The timeless classic white-tip finish for an elegant look." 
    },
    { 
      name: "Nail Designs", 
      price: "R150", 
      desc: "Custom hand-painted artistry and bespoke patterns." 
    },
    { 
      name: "Plain Nails", 
      price: "R120", 
      desc: "Clean, solid color application for a polished everyday look." 
    },
    { 
      name: "Toes Only (Gel)", 
      price: "R80", 
      desc: "Professional gel application for durable, high-shine toes." 
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-wrapper">
        <span className="subtitle">Nana's Selection</span>
        <h2>Our Services</h2>
        <p className="service-notice">Available in-studio or via our exclusive house service.</p>
        
        <div className="menu-list">
          {services.map((service, index) => (
            <div key={index} className="menu-item">
              <div className="item-header">
                <h3>{service.name}</h3>
                <span className="price">{service.price}</span>
              </div>
              <p className="item-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}