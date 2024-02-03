const express = require("express")
const { createPaymentIntent } = require("../controllers/stripeController")
const router = express.Router()

router.post('/payment',createPaymentIntent)

module.exports = router;