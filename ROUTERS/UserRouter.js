const express = require("express")
const registerUser = require("../CONTROLLERS/Register")
const LoginUser = require("../CONTROLLERS/Login")
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", LoginUser)

module.exports = router