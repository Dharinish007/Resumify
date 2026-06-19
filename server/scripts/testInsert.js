require('dotenv').config();
const connectDB = require('../config/db');
const User = require('../models/User');

const run = async() => {
    await connectDB();
    const testUser = await User.create({
        name: 'Test User',
        email: 'test@example.com',
        passwordHash: 'temp123'
    });
    console.log('Inserted:', testUser);
    process.exit(0);
};

run();