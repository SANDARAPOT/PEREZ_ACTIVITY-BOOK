const books = require('../models/bookModel');

// Controller to get all books
const getAllBooks = (req, res) => {
  res.json(books); // Return all books in the mock data
};

// Controller to get books by genre
const getBooksByGenre = (req, res) => {
  const { genre } = req.params;
  const filteredBooks = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());

  if (filteredBooks.length === 0) {
    return res.status(404).json({ message: 'No books found for the specified genre.' });
  }

  res.json(filteredBooks); // Return filtered books based on genre
};

module.exports = { getAllBooks, getBooksByGenre };
