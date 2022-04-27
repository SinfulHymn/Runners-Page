const Event = require('../models/events')
const User = require('../models/user')

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


module.exports = actions