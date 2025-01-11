const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, default: 0 },
  review: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Seller', SellerSchema);
