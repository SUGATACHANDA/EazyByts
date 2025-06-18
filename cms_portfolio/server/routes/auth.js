const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const router = express.Router();
const bcrypt = require('bcrypt');
const authMiddleware = require('../middleware/auth');



router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.json({ token });
    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
        const admin = await Admin.findById(req.user.id).select('email');
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json({ email: admin.email });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
