const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import Routes
const ownerRoutes = require('./routes/owner');
const propertyRoutes = require('./routes/propert');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.DB_Connection)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection failed:", err));

// Routes
app.use('/api/owners', ownerRoutes);
app.use('/api/properties', propertyRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
