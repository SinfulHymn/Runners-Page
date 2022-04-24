// imports
require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan")
const PORT = process.env.PORT
const dbURL = process.env.MONGO_URL
const eventRouter = require("./controllers/events")

// express app
const app = express();


// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(morgan("tiny"))

// routes
app.use(eventRouter)



// listener

app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`)) 