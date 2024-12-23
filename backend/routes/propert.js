const express = require('express');
const { addProperty, getAllProperties, getPropertyById } = require('../controllers/propertycontroller');

const router = express.Router();

// Add a new property
router.post('/', addProperty);

// Get all properties
router.get('/', getAllProperties);

// Get a single property by ID
router.get('/:id', getPropertyById);

module.exports = router;
