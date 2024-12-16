const express = require('express');
const router = express.Router();
const { getAllBooks, getBooksByGenre } = require('../controllers/bookController');

// Route to get all books
router.get('/books', getAllBooks);

// Route to get books by genre
router.get('/books/genre/:genre', getBooksByGenre);

module.exports = router;
