const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


//some one asks for the local Strategy,
//use the fallowing info from the request
//and the findAndComparePassword function to validate
exports.setup = function () {
  // pasport config
  passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
      }, findAndComparePassword));
  // conversts user to user id
  passport.serializeUser(function(user,done) {
      done(null, user.id);
      });

  passport.deserializeUser(function () {
    User.findById(id).then(function () {
      done(null, user);
    }).catch(function (err) {
      done(err);
    });
  });

};//end of exports.setup

//passport knows the order of arguments is as fallows username password done
function findAndComparePassword(username, password, done) {
  //look up user by user name
  User.findOne({username: username}).then(function (user) {
    if(!user) {
      //did not find a user, not successful login
      return done(null, false);
    }
    //compare the password
    user.comparePassword(password).then(function(isMatch) {
      if (isMatch){
        done(null, user);
      }else{
        done(null, false);
      }
    });
  }).catch(function(err) {
    console.log('error finding user',err);
    done(err);
  });
}// end of find and compare password function
