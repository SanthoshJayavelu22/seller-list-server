const express = require('express');
const Seller = require('../models/Seller');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();


router.get('/sellers-list', authMiddleware, async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/search-sellers', authMiddleware, async (req, res) => {
  try {
    const { name } = req.query;

  
    const query = name ? { name: { $regex: new RegExp(name, 'i') } } : {};

    const sellers = await Seller.find(query); 
    if (name && typeof name !== 'string') {
        return res.status(400).json({ error: '`name` query parameter must be a string.' });
      }
      
    res.status(200).json(sellers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
