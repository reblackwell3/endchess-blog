const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to blogdb
        await mongoose.connect('mongodb://localhost:27017/blogdb');
        console.log('Connected to blogdb');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
