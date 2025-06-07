const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const SoldItem = require('../models/SoldItem');

// Get all products by category
router.get('/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category, sold: false });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark product as sold
router.post('/:id/sold', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || product.sold) return res.status(400).json({ message: 'Product not available' });

    product.sold = true;
    product.soldAt = new Date();
    await product.save();

    await SoldItem.create({ productId: product._id });
    res.json({ message: 'Product marked as sold' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
