const postService = require('./postService');

const getPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = await postService.createPost({title, content});
        res.status(201).json(newPost);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
};

module.exports = { getPosts, createPost};