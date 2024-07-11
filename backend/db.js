const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_BLOG, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Blog db connected');

        await mongoose.connect(process.env.MONGO_URI_PROJECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Project db connected');
    } catch (e) {
        console.error('Error connecting to db', e);
        process.exit(1);
    }
};

module.exports = connectDB;