const express = require("express");
const router = express.Router()
const passport = require('passport')
const indexAction = require("../controllers/index.js")
const Event = require("../models/events");

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
