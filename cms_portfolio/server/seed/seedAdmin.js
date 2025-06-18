// seedAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
require('dotenv').config();

async function seedAdmin() {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await Admin.findOne({ email: 'admin@portfolio.com' });
    if (existing) {
        console.log('Admin already exists');
        return process.exit();
    }

    const hashedPassword = await bcrypt.hash('admin123456789', 10);
    await Admin.create({
        email: 'admin@portfolio.com',
        password: hashedPassword,
    });

    console.log('Admin seeded');
    process.exit();
}

seedAdmin();
