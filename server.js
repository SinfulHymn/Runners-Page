// read env variables
require("dotenv").config()
// imports
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan")
const session = express("express-session")
const passport = require("passport")
const PORT = process.env.PORT || 3054

// express app
const app = express();


// !!!!!!!! attention this may need to change
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
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


// add passport middleware here



// use routes
app.use('/',indexRouter)


// listener
app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`)) 