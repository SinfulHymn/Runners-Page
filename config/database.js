// require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;
// database connect
mongoose.connect(DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{});

// database event listeners
const db = mongoose.connection;
db.on("error", err => console.log(`error\n${err.message}`));
db.on("connected", ()=> console.log("Mongo DB Connected"));
db.on("disconnected", ()=> console.log("Mongo DB Disconnected"));

module.exports = mongoose;