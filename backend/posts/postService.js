const Post = require('./postModel');

const getAllPosts = async () => {
    return await Post.find();
}

const createPost = async (postData) => {
    const newPost = new Post(postData);
    return await newPost.save();
}

module.exports = {
    getAllPosts,
    createPost,
};