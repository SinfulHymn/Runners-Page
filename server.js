// imports
require("dotenv").config()
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan")

//router
const indexRouter = require("./routes/index.js")

// express app
const app = express();


// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(morgan("dev"))

// routes
app.use(indexRouter)



// listener
const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`)) 