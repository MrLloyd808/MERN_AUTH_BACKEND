const express = require("express")
const MakePost = require("../CONTROLLERS/MakePost")
const GetPost = require("../CONTROLLERS/GetPost")
const Validate = require("../MIDDLEWARES/ValidateUser")

const router = express.Router()

router.post("/makepost", Validate, MakePost)
router.get("/posts", Validate, GetPost)

module.exports = router