const express = require('express');
const app = express();
const port = 3000;

// Import book routes
const bookRoutes = require('./routes/bookRoutes');

// Use JSON middleware to parse incoming JSON data
app.use(express.json());

// Use the book routes
app.use(bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
