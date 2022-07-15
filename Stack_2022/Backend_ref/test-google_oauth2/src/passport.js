// require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "418008166942-4of56nf918dkblkuiahldbc67psfl4qo.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));