const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    snippet:String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
