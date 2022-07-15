const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GOOGLE_CLIENT_ID ='418008166942-4of56nf918dkblkuiahldbc67psfl4qo.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      console.log(profile);
    return done(null, profile);
  }
));


passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
})