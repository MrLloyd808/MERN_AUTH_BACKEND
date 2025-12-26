const express = require("express")
const registerUser = require("../CONTROLLERS/Register")
const LoginUser = require("../CONTROLLERS/Login")
const Logout = require("../CONTROLLERS/Logout")
const ValidateUser = require("../MIDDLEWARES/ValidateUser")
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", LoginUser)
router.post("/logout", ValidateUser, Logout)

module.exports = router