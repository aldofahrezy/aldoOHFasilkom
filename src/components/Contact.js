// Contact.js

import React from 'react';
import './Contact.css'; // Import the Contact CSS

function Contact() {
  return (
    <section id="contact">
      <p>Feel free to reach out through my social media channels:</p>
      <div className="social-icons">
        <a href="https://x.com/lmaoaopisan" className="icon twitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/aldofhrzy/" className="icon instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-aldo-fahrezy-165922230/" className="icon linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
