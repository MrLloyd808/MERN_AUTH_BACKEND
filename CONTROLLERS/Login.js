const bcrypt = require('bcryptjs')
const User = require("../MODELS/UserModel")
const jwt = require("jsonwebtoken")

const LoginUser = async (req, res) => {
   const {email, password} = req.body

   try {
     // find user by email
      const findUser = await User.findOne({email})
      if (!findUser) return res.status(404).json({
        success: false,
        message: "user not found"
      })
      
      // compare passwords
      const isCorrectPassword = await bcrypt.compare(password, findUser.password)

      if (!isCorrectPassword) return res.status(400).json({
        success: false,
        message: "incorrect password"
      })

      // if password is valid, create a token
    const token = await jwt.sign({
        id: findUser._id,
        username: findUser.username,
        email: findUser.email,
        firstname: findUser.firstname,
        lastname: findUser.lastname,
        role: findUser.role
    },
    process.env.JWT_SECRET,
     {
       expiresIn: "24h"
     }
  )
  
   // return signed token with response

   res.cookie("token", token, {
    httpOnnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000
   })

  res.status(200).json({
    success: true,
    message: "logged in successfully",
  })

   } catch (error) {
    res.status(500).json({
        success: false,
        message: 'something went wrong in the server: ' + error.message
    })
   }
}

module.exports = LoginUser