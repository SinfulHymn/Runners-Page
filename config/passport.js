const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require("../models/user");


// passport.use
passport.use(new GoogleStrategy({
    // heroku
    clientID: process.env.GOOGLE_CLIENT_ID_HEROKU,
    // local
    // clientID: process.env.GOOGLE_CLIENT_ID,
    // heroku
    clientSecret: process.env.GOOGLE_SECRET_HEROKU,
    // local
    // clientSecret: process.env.GOOGLE_SECRET,
    // heroku
    callbackURL: process.env.GOOGLE_CALLBACK_HEROKU
    // local
    // callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {
    // user has attempted a login 
    //does this user already exist in our own database?
    // check
    User.findOne({'googleID': profile.id},function(err, user){
        // if they don't we create 
        // check for and handle errors
        if(err) return cb(err);
        // if a user exists in our database - log them in
        if(user){
            return cb(null, user);
        } else{
            // user doesn't exists, create them 
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                avatarURL: profile.photos[0].value
            });
            newUser.save(function(err){
                if(err) return cb(err)
                // user saved succesffully 
                return cb(null, newUser)
            });
        };
    });
}));

///make sure it works with arrow function

// passport.serailizeUser
passport.serializeUser(function(user,done){
    done(null,user.id);
});
// passport.deserializeUser
//then decodes thw cookei and looks up the user in session store req.user for us 
passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        done(err,user);//creates req.user 
    });
});



