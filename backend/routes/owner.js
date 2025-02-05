const express = require('express');
const { addOwner, getAllOwners, getOwnerById } = require('../controllers/ownerController');

const router = express.Router();

// Add a new owner
router.post('/', addOwner);

// Get all owners
router.get('/', getAllOwners);

// Get a single owner by ID
router.get('/:id', getOwnerById);

module.exports = router;
