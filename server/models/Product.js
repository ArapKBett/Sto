const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ['cars', 'phones', 'pcs', 'software', 'accessories', 'clothes'] },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  stock: { type: Number, required: true, default: 1 },
  sold: { type: Boolean, default: false },
  soldAt: { type: Date },
});

module.exports = mongoose.model('Product', productSchema);
