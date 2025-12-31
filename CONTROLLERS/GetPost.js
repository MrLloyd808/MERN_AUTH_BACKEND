const PostSchema = require('../MODELS/PostSchema')

const GetPost = async (req, res) => {
    try {
        const posts = await PostSchema.find({
            author: req.user.id
        }).populate("author", "-password -role -email")

        if (!posts) return res.status(404).json({
            success: false,
            message: "no posts available"
        })

        res.status(200).json({
            success: false,
            message: "here is a list of all the posts",
            posts
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong in the server: " + err.message
        })
    }
}

module.exports = GetPost