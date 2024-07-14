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

let Post;

const setConnection = (connection) => {
    Post = connection.model('Post', postSchema);
};

module.exports = {
    setConnection,
    getModel: () => Post,
};