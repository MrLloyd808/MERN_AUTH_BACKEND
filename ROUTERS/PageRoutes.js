const express = require("express")
const ValidateUser = require("../MIDDLEWARES/ValidateUser")
const Admin = require("../MIDDLEWARES/Admin")
const Pagerouter = express.Router()

Pagerouter.get("/home", ValidateUser, (req, res) => {
  res.status(200).json({
    success: true,
    message: "authorized"
  })
})

Pagerouter.get("/admin", ValidateUser, Admin, (req, res) => {
    res.status(200).json({
        success: true,
        message: "admin authorized"
    })
})

module.exports = Pagerouter
