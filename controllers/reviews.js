// import schema model
const Event = require("../models/events");
const User = require("../models/user");

const reviewsActions = {}

reviewsActions.addReview = (req,res) =>{
    // find event by id
    Event.findById(req.params.id, (err,event)=>{
        // push req.body into event reviews array and schema
        event.reviews.push(req.body);
        // get user who is reviewing
        User.findById(req.user, (err,user)=>{
            // push into users.schema reviewedEvents
            user.reviewedEvents.push(req.params.id);
            // save 
            user.save((err)=>{
                console.log(err);
            })
        })
        // save with newly added data   
        event.save((err)=>{
            res.redirect(`/show/${req.params.id}`)
        })
    })
}

reviewsActions.updateRating = (req,res)=>{
    Event.findById(req.params.id, (err,event)=>{


        
    })
}