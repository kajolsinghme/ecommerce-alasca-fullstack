const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require("./routes/authRoute");
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute'); 
const cartRoute = require('./routes/cartRoute'); 
const orderRoute = require('./routes/orderRoute'); 
const stripeRoute = require('./routes/stripeRoute'); 
require('./db/connection');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; 

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute); 
app.use('/api/carts', cartRoute); 
app.use('/api/orders', orderRoute); 
app.use('/api/checkout', stripeRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

