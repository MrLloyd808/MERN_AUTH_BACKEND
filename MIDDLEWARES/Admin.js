const isAdmin =  (req, res, next) => {
    try {
        if (req.user.role !== "admin") return res.status(403).json({
            success: false,
            message: "rights reserved for admins only"
        })

        res.status(200).json({
            success: true,
            message: "welcome admin " + req.user.username
        })
        
        return next()
    } catch (error) {
        res.status({
            success: false,
            message: "something went wrong in the server"
        })
    }
    
}

module.exports = isAdmin