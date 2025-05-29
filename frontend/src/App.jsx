import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardForm from './components/CardForm';
import FlipCard from './components/FlipCard';
import CookiePopup from './components/CookiePopup';
import './styles.css';

function App() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cards');
      setCards(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addCard = async (newCard) => {
    try {
      const res = await axios.post('http://localhost:5000/api/cards', newCard);
      setCards([...cards, res.data]);
      setCurrentIndex(cards.length);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (cards.length === 0 ? 0 : (prev + 1) % cards.length));
  };

  return (
    <div className="container">
      <h1>Flashcards</h1>
      <div className="menu">
        <h2>Add a Card</h2>
        <CardForm addCard={addCard} />
      </div>

      {cards.length > 0 ? (
        <>
          <FlipCard
            question={cards[currentIndex].question}
            answer={cards[currentIndex].answer}
          />
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </>
      ) : (
        <p>No cards yet. Add some questions!</p>
      )}

      {/* Cookie Popup */}
      <CookiePopup />
    </div>
  );
}

export default App;
