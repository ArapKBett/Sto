const mongoose = require('mongoose');

const soldItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  soldAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SoldItem', soldItemSchema);
