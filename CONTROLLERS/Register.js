const bcrypt = require('bcryptjs')
const User = require("../MODELS/UserModel")

 const registerUser = async (req, res) => {
  const {email, firstname, lastname, username, role, password} = req.body

  try {
    // check existing email
    const findUserEmail = await User.findOne({email})
    if (findUserEmail) return res.status(409).json({
        success: false,
        message: "User With email already exist"
    })

    // find existing username
    const findUsername = await User.findOne({username})
    if (findUsername) return res.status(409).json({
        success: false,
        message: "User With username already exist"
    })

    // check if anything was submitted at all
    if (!username || !email || !firstname || !lastname || !password) return res.status(400).json({
        success: false,
        message: "all fields are required"
    })

    // hash password if there is one

    const hashedPassword = await bcrypt.hash(password, 10)

    // we got this far, might as well save to DB
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        firstname,
        lastname,
        role
    })

    // user created successfully

    res.status(201).json({
        success: true,
        message: "user created successfully " + "\n" + newUser.username
    })

  } catch (error) {
    res.status(500).json({
        success: false,
        message: "something went wrong in the server: " + error.message
    })
  }
}

module.exports = registerUser