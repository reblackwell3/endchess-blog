const mongoose = require('mongoose');

const connectDBs = async () => {
    try {
        // Connect to blogdb
        const blogDBConnection = await mongoose.createConnection('mongodb://localhost:27017/blogdb');
        console.log('Connected to blogdb');

        // Connect to projectdb
        const projectDBConnection = await mongoose.createConnection('mongodb://localhost:27017/projectdb');
        console.log('Connected to projectdb');

        return { blogDBConnection, projectDBConnection };
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDBs;
