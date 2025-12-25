const mongoose = require("mongoose")
const crypto = require("crypto")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        unique: true,
        type: String,
        default: () => crypto.randomBytes(6).toString()
    },
    role: {
        type: String,
        default: "user",
    },
    password: {
        type: String,
        required: true
    }
    
})

const User = mongoose.model("user", UserSchema)

module.exports = User