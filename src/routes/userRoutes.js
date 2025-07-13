const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/authMiddleware');

// Only admin can access these routes
router.get("/admin", verifyToken, (req, res) => {
    res.json({ message: "Admin access granted" });
});

// Only admin and manger can access these routes
router.get("/manager", (req, res) => {
  res.json({ message: "Manager access granted" });
});

// All users can access these routes
router.get("/user", (req, res) => {
  res.json({ message: "User access granted" });
});

module.exports = router;