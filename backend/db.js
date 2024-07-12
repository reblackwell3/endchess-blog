const mongoose = require('mongoose');

const connectDBs = async () => {
    try {
        const blogConnection = mongoose.createConnection(process.env.MONGO_URI_BLOG);
        blogConnection.on('connected', () => console.log('Blog db connected'));

        const projectConnection = mongoose.createConnection(process.env.MONGO_URI_PROJECT);
        projectConnection.on('connected', () => console.log('Project db connected'));

        mongoose.blogConnection = blogConnection;
        mongoose.projectConnection = projectConnection;
    } catch (e) {
        console.error('Error connecting to db', e);
        process.exit(1);
    }
};

module.exports = connectDBs;