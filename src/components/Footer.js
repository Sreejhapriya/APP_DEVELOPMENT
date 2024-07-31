// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Quick Links</h2>
          
        </div>
        <div className="footer-middle">
          <h3>Company</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/send-feedback">Send Feedback</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Contact Info</h3>
          <p>Po Box 3, Yancey, Texas 78886</p>
          <p>+1 210-246-3531</p>
          <p><a href="mailto:support@lyfetymes.com">support@lyfetymes.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright © Lyfetymes 2024</p>
      </div>
    </div>
  );
};

export default Footer;
