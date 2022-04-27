// read env variables
require("dotenv").config();
// imports
const express = require("express");
// ~~~~~~~~~~~~~~~~~~~~~~remember to take off for heroku~~~~~~~~~~~~~~~~~~~~~~~~
const morgan = require("morgan");
// fucking typos man...
// the console is telling you something is wrong with express listen to the fucking console.
// yes, the express was there but man look for typos
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3002 ;

// express app
const app = express();

// !!!!!!!! attention this may need to change
// connect to the MongoDB with mongoose
// by simply running the code inside of ./config/database
require("./config/database");
// initialize oauth process for login requests by simply tunning the code
require("./config/passport");

// require routes
const indexRouter = require("./routes/index.js");

// view engine
// app.set('view engine', 'ejs')

// middleware
app.use(express.urlencoded({extended: true}));
app.use('/static',express.static("public"));
app.use(methodOverride("_method"));
// ~~~~~~~~~~~~~~~~~~~~~~remember to take off for heroku~~~~~~~~~~~~~~~~~~~~~~~~
app.use(morgan("dev"));
app.use(express.json());

// !!!! this is cause the crash I don't know how.
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// add passport middleware here



// use routes
app.use('/',indexRouter);


// listener
app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`))