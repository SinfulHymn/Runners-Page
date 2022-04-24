// import schema model
const Event = require("../models/events")
const eventsSeed = require("../models/eventsSeed")

const actions = {}


actions.index = (req,res)=>{
    Event.find({}, (err,events)=>{
        res.render("index.ejs",{events});
    })
}

actions.seed = (req,res)=>{
    Event.deleteMany({},(err,events)=>{
        Event.create(eventsSeed,(err,data)=>{
            res.redirect("/")
        })
    })   
}


actions.new = (req,res)=>{
    res.render("new.ejs")
}



module.exports = actions