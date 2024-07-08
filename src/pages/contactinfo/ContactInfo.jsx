import React from 'react';
import './ContactInfo.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h1>Datos de contacto</h1>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <p>[lavernia.llorens@gmail.com]</p>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a href="https://www.linkedin.com/in/llorens-lavernia-artola-84544b225/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <a href="https://github.com/nyascla" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ContactInfo;
