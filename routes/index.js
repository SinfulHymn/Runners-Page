const express = require("express");
const router = express.Router()
const passport = require('passport')
const indexAction = require("../controllers/index.js")

// index 
router.get("/", indexAction.indexget)
// seed
router.get("/seed", indexAction.seedget)
// new 
router.get("/new",indexAction.newget)
// show
// router.get()



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
