const express = require("express")
const MakePost = require("../CONTROLLERS/MakePost")
const GetPost = require("../CONTROLLERS/GetPost")
const Validate = require("../MIDDLEWARES/ValidateUser")
const DeletePost = require("../CONTROLLERS/DeletePost")

const router = express.Router()

router.post("/makepost", Validate, MakePost)
router.get("/posts", Validate, GetPost)
router.delete("/:id", Validate, DeletePost)

module.exports = router