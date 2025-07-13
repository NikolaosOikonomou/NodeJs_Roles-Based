const express  = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dbConnect();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Start server
const PORT = process.env.PORT || 7002;

app.get("/", (req, res) => {
  res.send("Welcome to the Roles Based Node.js API");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});