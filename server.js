// imports
require("dotenv").config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan")
const raceRouter = require("./controllers/race")
const PORT = process.env.PORT
const dbURL = process.env.MONGO_URL


// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(morgan("tiny"))

// routes
app.use(raceRouter)

// database connect
mongoose.connect(dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{})

// database event listeners
const db = mongoose.connection
db.on("error", err => console.log(`error\n${err.message}`))
db.on("connected", ()=> console.log("Mongo DB Connected"))
db.on("disconnected", ()=> console.log("Mongo DB Disconnected"))

// listener

app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`)) 