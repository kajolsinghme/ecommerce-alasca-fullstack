const express = require('express');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.put('/update/:id', verifyTokenAndAuthorization, updateUser)
router.delete('/delete/:id', verifyTokenAndAuthorization, deleteUser)
router.get('/find/:id', verifyTokenAndAdmin, getUser)
router.get('/find', verifyTokenAndAdmin, getAllUsers)

module.exports = router;
