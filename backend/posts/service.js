const {getModel} = require('./model');

const getAllPosts = async () => {
    const Post = getModel();
    return await Post.find();
}

const createPost = async (postData) => {
    const Post = getModel();
    const newPost = new Post(postData);
    return await newPost.save();
}

module.exports = {
    getAllPosts,
    createPost,
};