// Import required modules
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the API endpoint
app.get('/api', (req, res) => {
  // Send a response with some JSON data
  res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});