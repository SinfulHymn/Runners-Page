// import schema model
const Event = require("../models/events");
const eventsSeed = require("../models/eventsSeed");
const User= require('../models/user')

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

// get show
actions.showget = (req,res)=>{
    Event.findById(req.params.id, (err,event)=>{
        User.findById({}, (err,users)=>{
            res.render("show.ejs",{
                event,
                user:req.user,
                users: users
            })
        })
        
    })
}
// post create
actions.createpost = (req,res)=>{
    console.log(req.body)
    Event.create(req.body, (err,createdEvent)=>{
        if(err) return res.send(err)
        res.redirect("/")
    })
}

// delete method delete
actions.delete = (req,res)=>{
    Event.findByIdAndDelete(req.params.id, (err,deletedEvent)=>{
        res.redirect("/")
    })
}

// edit get
actions.editget = (req,res)=>{
    Event.findById(req.params.id,(err,event)=>{
        res.render("edit.ejs",{
            event,
            user:req.user
        })
    })
} 

// update put
actions.updateput = (req,res)=>{
    Event.findByIdAndUpdate(req.params.id, req.body,(err,updatedEvent)=>{
        if(err) console.log(err)
        res.redirect(`/show/${req.params.id}`)
    })
}



module.exports = actions