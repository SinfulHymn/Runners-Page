// read env variables
require("dotenv").config();
const express = require("express");
// import morgan from "morgan";
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

let PORT = 3000
// Check if the specified port is available

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
// app.use(morgan("dev"));
app.use(express.json());

// !!!! this is cause the crash I don't know how.
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());



// use routes
app.use('/',indexRouter);



// app listener  but change port if already in use

// listener
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
}
);
