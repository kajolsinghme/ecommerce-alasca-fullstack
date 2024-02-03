const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.DB)
.then(() => console.log("Database Connected"))
.catch(error => console.error('Error connecting to database:', error));