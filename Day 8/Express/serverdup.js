const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// POST route to handle incoming data
app.post('/submit-data', (req, res) => {
  const { name, age } = req.body; // Destructure data from the request body

  // You can now use this data
  console.log('Name:', name);
  console.log('Age:', age);

  // Respond back to the client
  res.send(`Received the data: Name - ${name}, Age - ${age}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
