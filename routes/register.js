const router = require('express').Router();
const User = require('../models/user');

router.post('/', function(req, res) {
  //console.log('registering new user', req.body);
  const user = new User({username: req.body.username, password: req.body.password,
                          mirror:[{id:req.body.mirrorId, displayData: { type : Array , "default" : [] }}]});
  user.save().then(function(response) {
  //  console.log('whats the response or the post', response);
    res.sendStatus(201);
  }).catch(function(err){
    console.log('Error in /register', err);
    res.sendStatus(500);
  });
});

module.exports = router;
