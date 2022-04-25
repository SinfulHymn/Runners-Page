const express = require("express");
const router = express.Router()
const passport = require('passport')
const indexAction = require("../controllers/index.js")

// index 
router.get("/", indexAction.index)
// seed
router.get("/seed", indexAction.seed)
// new 
router.get("/new",indexAction.new)

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
