// backend/controllers/cardsController.js
let cards = [
  { id: 1, question: "Що таке React?", answer: "Бібліотека для створення UI" },
  { id: 2, question: "Що таке Node.js?", answer: "Середовище для запуску JavaScript на сервері" }
];

const getCards = (req, res) => {
  res.json(cards);
};

const createCard = (req, res) => {
  const { question, answer } = req.body;
  const newCard = {
    id: cards.length + 1,
    question,
    answer
  };
  cards.push(newCard);
  res.status(201).json(newCard);
};

module.exports = { getCards, createCard };
