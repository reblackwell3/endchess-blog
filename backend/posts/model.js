const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const conn = mongoose.createConnection('mongodb://localhost:27017/blogdb');
conn.on('connected', () => console.log('Blog db connected'));
const Post = conn.model('Post', postSchema);

module.exports = Post;