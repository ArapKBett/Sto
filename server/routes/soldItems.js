const express = require('express');
const router = express.Router();
const SoldItem = require('../models/SoldItem');

// Get all sold items (for admin purposes, if needed)
router.get('/', async (req, res) => {
  try {
    const soldItems = await SoldItem.find().populate('productId');
    res.json(soldItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
