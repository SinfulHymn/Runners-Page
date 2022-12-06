const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router()
const passport = require('passport')
const indexAction = require("../controllers/index.js")
const Event = require("../models/events");
const User = require("../models/user")

// index 
router.get("/", indexAction.indexget);
// seed
router.get("/seed", indexAction.seedget);
// new 
router.get("/new",indexAction.newget);
// show
router.get("/show/:id",indexAction.showget)
// create
router.post("/",indexAction.createpost)
// delete
router.delete('/show/:id',indexAction.delete)
// edit
router.get('/edit/:id',indexAction.editget)
// update
router.put('/show/:id',indexAction.updateput)


// add review
router.post("/review/:id",(req,res)=>{
    Event.findById(req.params.id, (err,event)=>{
        event.reviews.push(req.body);
        User.findById(req.user, (err,user)=>{
            user.reviewedEvents.push(req.params.id);
            user.save((err)=>console.log(err))
        })
        event.save((err)=>{
            console.log(err)
            res.redirect(`/show/${req.params.id}#reviews`)
        })
    })
})

// delete review
router.delete("/review/:eventid/:reviewid/",(req,res)=>{
        //if the id of the review from params = to the id of the array from find then splic the array from the array 
        // console.log("eventid:  ", req.params.eventid)
        console.log(req.params.reviewid.toString(), " :id of the review" )
        // we get the single id of the event 
        Event.findById(req.params.eventid,(err,event)=>{
            //console.log("event inside findbyid: ", event.reviews)
           // iterate through the reviews array in the Event


           console.log(event.reviews[0]._id.toString())
            event.reviews.forEach((review, index, array)=>{
                // if id event id from params = to the id of the review in the array splice the review from the array
                if(req.params.reviewid== review._id.toString()){
                    array.splice(index,1)
                }
            })
            event.save((err)=>{
               if(err) console.log("this is err:", err)
                res.redirect(`/show/${req.params.eventid}#reviews`)
            })
        })
        // .populate('reviews.reviewedBy')

})

//user get
router.get("/user",(req,res)=>{
    if(req.user){
        User.findById(req.user._id).populate('reviewedEvents').exec((err,user)=>{
            res.render('user.ejs',{
                user
            })
        })
    }
})

// login route
router.get("/auth/google", passport.authenticate('google',{
    scope: ['profile', 'email']
}))
// callback route - call back/requrested after user logs in
router.get("/oauth2callback", passport.authenticate('google',{
    successRedirect: '/',
    failureRedirect: '/'
}))
// logout route

router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')
})

module.exports = router
