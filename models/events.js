// import connection
const mongoose = require("../config/database")

const Schema = mongoose.Schema

//schema
const eventsSchema = new Schema({
    name: {type: String, unique:true, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: String, required: true},
    image: {type: String, required: true},
    source: {type: String, required: true},
    signup: {type: String, required: true},
    price: {type: String, required: true},
})

const Event = mongoose.model("Event", eventsSchema)

//export model
module.exports = Event