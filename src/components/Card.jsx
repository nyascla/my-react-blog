import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ card }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/my-react-blog/detail/${card.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
}

export default Card;
