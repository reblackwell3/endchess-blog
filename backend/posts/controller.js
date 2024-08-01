const Post = require('./model');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const Post = getModel();
        const newPost = new Post(postData);
        await postService.createPost({title, content});
        res.status(201).json(newPost);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
};

module.exports = { getPosts, createPost};