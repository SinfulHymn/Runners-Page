// read env variables
require("dotenv").config()
// imports
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan")
const PORT = process.env.PORT || 3054

// express app
const app = express();
// connect to the MongoDB with mongoose
const mongoose = require("./config/database")

// require routes
const indexRouter = require("./routes/index.js")

// view engine
app.set('view engine', 'ejs')

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(morgan("dev"))
// add session middleware here

// add passport middleware here



// use routes
app.use('/',indexRouter)


// listener
app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`)) 