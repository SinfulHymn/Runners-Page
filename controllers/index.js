// import schema model
const Event = require("../models/events");
const eventsSeed = require("../models/eventsSeed");

const actions = {};

// get index
actions.indexget = (req,res)=>{
    Event.find({}, (err,events)=>{
        res.render("index.ejs",{
            events,
            user: req.user
        });
    });
};
// get seed
actions.seedget = (req,res)=>{
    Event.deleteMany({},(err,events)=>{
        Event.create(eventsSeed,(err,data)=>{
            res.redirect("/");
        });
    });   
};

// get new
actions.newget = (req,res)=>{
    res.render("new.ejs",{
        user: req.user
    });
}



module.exports = actions