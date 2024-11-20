// server.js
const express = require('express');
const connectDB = require('./config/dataconection'); // Correct file path for MongoDB config
const cloudinary = require('./config/cloudinaryconnection'); // Correct file path for Cloudinary config

require('dotenv').config(); // Load environment variables
const indexRoutes = require('./route/index.route');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the connectDB function

// Cloudinary initialization
cloudinary; // Cloudinary is already initialized in its config file

// Routes
app.use('/api', indexRoutes);

app.use('/', (req, res) => {
    res.send("Hii Server this side")
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
