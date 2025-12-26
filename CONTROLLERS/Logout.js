 const Logout = (req, res) => {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        samesite: 'strict'
      })

      res.status(200).json({
        success: true,
        message: "logged out"
      })
    } catch (err) {
     res.status(500).json({
        success: false,
        message: "something went wrong in the server: " + err.message
     })
    }
}

module.exports = Logout