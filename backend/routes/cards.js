// backend/routes/cards.js
const express = require('express');
const router = express.Router();
const { getCards, createCard } = require('../controllers/cardsController');

router.get('/', getCards);
router.post('/', createCard);

module.exports = router;
/**
 * @swagger
 * /api/cards:
 *   get:
 *     summary: Get all cards
 *     responses:
 *       200:
 *         description: Returns all cards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 * 
 *   post:
 *     summary: Create a new card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Card created
 */

