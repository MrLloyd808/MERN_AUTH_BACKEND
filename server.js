const express = require('express')
require("dotenv").config()
const cors = require('cors')
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const path = require("path")
const UserRouter = require("./ROUTERS/UserRouter")
const PageRouter = require("./ROUTERS/PageRoutes")

const app = express()

mongoose.connect(process.env.DB_URI)
.then(() => app.listen(process.env.PORT, () => console.log('server is listenig on port: ' + process.env.PORT)))
.catch((err) => console.error(err))


app.use(cors({
    origin: [
        "https://mernauthpractice.netlify.app",
        "http://localhost:5173"
    ],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "static")))
app.use('/auth', UserRouter)
app.use("/api", PageRouter)

app.get("/", (req, res) => {
    res.sendFile("index.html")
})