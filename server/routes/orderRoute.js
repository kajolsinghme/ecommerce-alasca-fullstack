const express = require('express');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const { createOrder, updateOrder, deleteOrder, getOrders, getAllOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/create', verifyToken, createOrder)
router.put('/update/:id', verifyTokenAndAdmin, updateOrder)
router.delete('/delete/:id', verifyTokenAndAdmin, deleteOrder)
router.get('/find/:id', verifyTokenAndAuthorization, getOrders)
router.get('/find', verifyTokenAndAdmin, getAllOrders)

module.exports = router;
