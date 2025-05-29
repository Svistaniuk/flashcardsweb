// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const cardsRouter = require('./routes/cards');
const setupSwagger = require('./swagger');
setupSwagger(app);

app.use(cors());
app.use(express.json()); // Для парсингу JSON

// Логування запитів: IP, час, маршрут
app.use((req, res, next) => {
  const logEntry = `[${new Date().toISOString()}] ${req.ip} requested ${req.method} ${req.originalUrl}`;
  console.log(logEntry);
  next();
});

// Роутинг
app.use('/api/cards', cardsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
