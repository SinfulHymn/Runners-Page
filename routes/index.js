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
            res.redirect(`/show/${req.params.id}`)
        })
    })
})

// delete review
router.delete("/review/:eventid/:reviewid/",(req,res)=>{

        console.log( JSON.stringify(req.user._id))
        User.findById(req.user._id, (err,user)=>{
            console.log(req.params.reviewid)
        }).populate('reviewedEvents')

        Event.findById(req.params.eventid,(err,event)=>{
        //    console.log(event.reviews.reviewedBy)
            event.reviews.forEach((review)=>{
                if(req.params.reviewid == review.id){

                    console.log(review._id)
                }

            })
        }).populate('reviews.reviewedBy')

        // Event.findOne({"reviews.reviewedBy": req.user },(err,result)=>{
        //     if(err){
        //         res.send(err)
        //     } else{
        //         console.log(result)
        //     }
        // })




        // Event.reviews
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
