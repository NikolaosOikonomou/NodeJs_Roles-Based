const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');


exports.register = async (req, res) => {
    const {username, password, role} = req.body;
    const hashedPassword = await bcrypt.hash(password, 11);
    const newUser = new User({
        username,
        password: hashedPassword,
        role
    });

    await newUser.save();
    
    res.status(201).json( {
        message: `User ${username} registered successfully`,
    });
};

exports.login = async (req, res) => {
    const {username, password} = req.body;
    res.send('User logged in');
};