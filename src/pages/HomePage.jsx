import React from 'react';
import Card from '../components/Card';

function HomePage() {
  const cards = [
    { id: 'doc1', title: 'Tarjeta 1', description: 'Descripción de la tarjeta 1' },
    { id: 'doc2', title: 'Tarjeta 2', description: 'Descripción de la tarjeta 2' },
    { id: 'doc3', title: 'Tarjeta 3', description: 'Descripción de la tarjeta 3' },
  ];

  return (
    <div className="home-page">
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default HomePage;
