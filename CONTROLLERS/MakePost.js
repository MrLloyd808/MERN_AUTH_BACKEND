const PostSchema = require("../MODELS/PostSchema")

const MakePost = async (req, res) => {
    const {title, body} = req.body

    try {
        if (!title || !body) return res.status(400).json({
            success: false,
            message: "all fields are required"
        })

        const newPost = await PostSchema.create({
            title,
            body,
            author: req.user.id
        })

        res.status(201).json({
            success: true,
            message: "post created successfully",
            post: newPost
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong in the server: " + error.message
        })
    }
}

module.exports = MakePost