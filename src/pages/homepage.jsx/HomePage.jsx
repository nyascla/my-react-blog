import React from 'react';
import BlogCard from '../../components/blogcard/BlogCard';
import './HomePage.css'


function HomePage() {
  const cardsData = [
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'CTF Walkthrough',
      description: '',
      link: '',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'Web app Multiusuario',
      description: '',
      link: 'https://github.com/orgs/PROYECTO-Cortina/repositories',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'Proyecto IoT',
      description: '',
      link: 'https://github.com/orgs/PROYECTO-Pink-Celsius/repositories',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'LeetCodes',
      description: '',
      link: 'https://github.com/nyascla/leetCode',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'Google Extension',
      description: '',
      link: 'https://github.com/nyascla/AUTO-Translate-Extension',
    },
    {
      image: 'https://via.placeholder.com/600x400',
      title: 'SSH honeypot',
      description: '',
      link: '',
    },

  ];

  return (
    <div>
      <div className="blog-cards-info">
        <p>Las tarjetas contienen enlaces a los correspondientes posts en GitHub.</p>
      </div>
      <div className="blog-cards-container">
        {cardsData.map((card, index) => (
          <BlogCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};


export default HomePage;
