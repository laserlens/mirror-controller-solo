const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
// new userSchema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  mirror:[{id: String, displayData: { type : Array , "default" : [] }}]
});
//encypt user pasword
userSchema.pre('save',function(done) {
  const user = this;

  bcrypt.hash(user.password, SALT_ROUNDS, function(err,hash) {
    if (err){
      console.log('Error hashing');
      return done(new Error('Error hassing pasword'));
    }
    user.password = hash;
    done();
  });
});
//compare user pasword with password in the database
userSchema.methods.comparePassword =function (password) {
  const user = this;

  return new Promise(function (resolve) {
    bcrypt.compare(password, user.password, function(err, match) {
      if(err){
        console.log('error comparing password');
        resolve(false);
      }

      resolve(match);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
