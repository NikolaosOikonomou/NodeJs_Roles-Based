const express  = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');

dbConnect();

const app = express();

// Middleware
app.use(express.json());

// Routes
const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});