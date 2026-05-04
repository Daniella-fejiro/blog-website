const express = require('express');
const router = express.Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
});

router.get("/", async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});


router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({
            message: "Post deleted successfully",
            deletedPost
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;