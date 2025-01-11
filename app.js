require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const sellerRoutes = require('./routes/seller');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 

// Connect to the database
connectDB();

// Routes
app.use('/auth', authRoutes);
app.use('/sellers', sellerRoutes);

// Default route for undefined routes (404 error)
app.use((req, res) => {
  res.status(404).json({ msg: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'An unexpected error occurred' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
