// Import dependencies
const express = require('express');
const cors = require('cors');
const multer = require("multer");
const path = require("path");

// Initialize the Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

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
  },

  {
    id: 4,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 5,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 6,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 7,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 8,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 80,
    image: "https://via.placeholder.com/150"
  },

  {
    id: 9,
    title: "Lorem Ipsum",
    traineeName: "Alice Johnson",
    progress: 50,
    image: "https://via.placeholder.com/150"
  },


];

// Dummy course data
const courses = [
    {
      id: 1,
      title: "Pemrograman Web",
      description: "Pemrograman Web! Di era digital",
      students: 1271,
      rating: 4.7,
      reviews: 320,
      imageUrl: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
    },

    {
        id: 2,
        title: "Pemrograman Web",
        description: "Pemrograman Web! Di era digital",
        students: 1271,
        rating: 4.7,
        reviews: 320,
        imageUrl: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
      },

      {
        id: 3,
        title: "Pemrograman Web",
        description: "Pemrograman Web! Di era digital",
        students: 1271,
        rating: 4.7,
        reviews: 320,
        imageUrl: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
      },

      {
        id: 4,
        title: "Pemrograman Web",
        description: "Pemrograman Web! Di era digital",
        students: 1271,
        rating: 4.7,
        reviews: 320,
        imageUrl: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
      },

      {
        id: 5,
        title: "Pemrograman Web",
        description: "Pemrograman Web! Di era digital",
        students: 1271,
        rating: 4.7,
        reviews: 320,
        imageUrl: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
      },

      {
        id: 6,
        title: "Pemrograman Web",
        description: "Pemrograman Web! Di era digital",
        students: 1271,
        rating: 4.7,
        reviews: 320,
        imageUrl: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
      },
    // Tambahkan 6 data dummy dengan format yang sama
  ];

    // Routes
    const meetingRoutes = require("./routes/meetings");
    app.use('/api/meetings', meetingRoutes);

    const syllabusRoutes = require("./routes/syllabus");
    app.use("/api/syllabus", syllabusRoutes);


    // API endpoint to get classes
    app.get('/api/classes', (req, res) => {
    res.json(classes);
    });

    app.get('/api/courses', (req, res) => {
        res.json(courses);
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
    
    // Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage });
  
  // API endpoint to handle project creation
  app.post("/api/projects", upload.single("videoFile"), (req, res) => {
    const { projectInfo, price } = req.body;
    const videoFile = req.file;
  
    if (!projectInfo || !price || !videoFile) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    // Simulate saving to a database
    console.log("Project Info:", projectInfo);
    console.log("Price:", price);
    console.log("Uploaded File:", videoFile);
  
    res.status(200).json({ message: "Project added successfully." });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
