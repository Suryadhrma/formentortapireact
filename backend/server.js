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
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    traineeName: "Jane Smith",
    progress: 100,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Node.js Essentials",
    traineeName: "Alice Johnson",
    progress: 80,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 4,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 5,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 6,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 7,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 8,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 9,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 50,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 10,
    title: "Lorem Ipsum",
    traineeName: "Gibran",
    progress:   45,
    desc: "Lorem Ipsum",
    totalTrainee: 1211,
    stars: 4.7,
    image: "https://via.placeholder.com/150"
}

];


    // API endpoint to get classes
    app.get('/api/classes', (req, res) => {
    res.json(classes);
    });

    // API endpoint to get class details by ID
    app.get('/api/classes/:id', (req, res) => {
        const classId = parseInt(req.params.id, 10);
        const classDetail = classes.find((cls) => cls.id === classId);
    
        if (!classDetail) {
        return res.status(404).json({ error: 'Class not found' });
        }
    
        res.json(classDetail);
    });
    

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
