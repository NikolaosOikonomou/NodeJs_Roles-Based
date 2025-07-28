const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/authMiddleware');
const authorizationRoles = require('../middlewares/roleMiddleware');

// Only admin can access these routes
router.get("/admin", verifyToken, authorizationRoles("admin"), (req, res) => {
    res.json({ message: "Admin access granted" });
});

// Only admin and manger can access these routes
router.get('/manager', verifyToken, authorizationRoles("admin", "manager"), (req, res) => {
  res.json({ message: 'Manager access granted' });
});

// All users can access these routes
router.get('/user', verifyToken, authorizationRoles("admin", "manager", "user"), (req, res) => {
  res.json({ message: 'User access granted' });
});

module.exports = router;