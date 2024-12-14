// Import dependencies
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// Sample data to simulate a database
const classes = [
  {
    id: 1,
    title: "React Basics",
    traineeName: "John Doe",
    progress: 60,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    traineeName: "Jane Smith",
    progress: 100,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Node.js Essentials",
    traineeName: "Alice Johnson",
    progress: 80,
    image: "https://via.placeholder.com/150"
  }
];

// API endpoint to get classes
app.get('/api/classes', (req, res) => {
  res.json(classes);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
