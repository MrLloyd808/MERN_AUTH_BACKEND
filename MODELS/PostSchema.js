const mongoose = require("mongoose")

const Post = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }

})

const PostSchema = mongoose.model("post", Post)

module.exports = PostSchema