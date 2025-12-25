const isAdmin =  (req, res, next) => {
    try {
        if (req.user.role !== "admin") return res.status(403).json({
            success: false,
            message: "rights reserved for admins only"
        })
        
        next()

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong in the server"
        })
    }
    
}

module.exports = isAdmin