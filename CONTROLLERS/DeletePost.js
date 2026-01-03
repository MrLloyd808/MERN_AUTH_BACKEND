const PostSchema = require("../MODELS/PostSchema")

const DeletePost = async (req, res) => {
    
    const { id } = req.params

    if (!id) return res.status(400).json({
        success: false,
        message: "id is required"
    })

    try {
        const thisPost = await PostSchema.findById(id)
        if (!thisPost) return res.status(404).json({
           success: false,
           message: "this post does not exist"
        })

        await thisPost.deleteOne()

        res.sendStatus(204)

    } catch (error) {
        res.status(500).json({
         success: false,
         message: "Internal server error: " + error.message
        })
    }
}

module.exports = DeletePost