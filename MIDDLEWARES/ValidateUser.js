const jwt = require("jsonwebtoken")

const ValidateUser = async (req, res, next) => {
    const tokenToValidate = req.cookies.token
    if (!tokenToValidate) return res.status(401).json({
        success: false,
        message: "no token submitted"
    })

    try {
        const verifiedToken = jwt.verify(tokenToValidate, process.env.JWT_SECRET)
        req.user = verifiedToken
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong in the server"
        })
    }
    next()
}