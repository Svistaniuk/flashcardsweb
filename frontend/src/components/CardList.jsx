import React, { useState } from 'react';

function CardList({ cards }) {
  const [flippedIds, setFlippedIds] = useState([]);

  const handleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          className="card-container"
          onClick={() => handleFlip(card.id)}
        >
          <div className={`card ${flippedIds.includes(card.id) ? 'flipped' : ''}`}>
            <div className="card-face card-front">
              <p><strong>Q:</strong> {card.question}</p>
            </div>
            <div className="card-face card-back">
              <p><strong>A:</strong> {card.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
