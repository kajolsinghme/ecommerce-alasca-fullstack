const express = require('express');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const { addToCart, updateCart, deleteCart, getCart, getAllCarts } = require('../controllers/cartController');
const router = express.Router();

router.post('/create', verifyToken, addToCart)
router.put('/update/:id', verifyTokenAndAuthorization, updateCart)
router.delete('/delete/:id', verifyTokenAndAuthorization, deleteCart)
router.get('/find/:id', verifyTokenAndAuthorization, getCart)
router.get('/find', verifyTokenAndAdmin, getAllCarts)

module.exports = router;
