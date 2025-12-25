const express = require("express")
const ValidateUser = require("../MIDDLEWARES/ValidateUser")
const Admin = require("../MIDDLEWARES/Admin")
const Pagerouter = express.Router()

Pagerouter.get("/home", ValidateUser)
Pagerouter.get("/admin", ValidateUser, Admin)

module.exports = Pagerouter
