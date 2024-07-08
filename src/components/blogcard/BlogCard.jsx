import React from 'react';
import './BlogCard.css';

import ppp from '/img.png'

const openLinkInNewTab = (url) => {
  if (!url) {
    alert("Enlace aún no disponible.")
  } else {
    window.open(url, '_blank');
  }
};

const BlogCard = ({ image, title, description, link }) => {
  return (
    <div className="blog-card" onClick={() => openLinkInNewTab(link)}>
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-description">{description}</p>
      </div>
      <img src={ppp} alt={title} className="blog-card-image" />

    </div>
  );
};

export default BlogCard;
