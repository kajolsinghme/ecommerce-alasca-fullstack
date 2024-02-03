const express = require('express');
const { verifyTokenAndAdmin } = require('./verifyToken');
const { updateProduct, deleteProduct, getProduct, getAllProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/create', verifyTokenAndAdmin, createProduct)
router.put('/update/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/delete/:id', verifyTokenAndAdmin, deleteProduct)
router.get('/find/:id', getProduct)
router.get('/find', getAllProducts)

module.exports = router;
