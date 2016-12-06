const router = require('express').Router();
const User = require('../models/user');



//get the user's data
router.get('/', function(req, res ){
  //console.log('whats the body', req.body);
  //console.log('whats the response', res.req.user.mirror);
  //send only the mirror array
  res.send(res.req.user.mirror);
  // User.find([]).then(function(dataFromTheDatabase){
  // console.log('Documents from mongo', dataFromTheDatabase);
  // res.send(dataFromTheDatabase);
});

//add a mirror to the user's data
router.post('/', function(req, res) {
  //console.log('new mirror data', req.body);

  //const mirrorId to old added mirror and the corisponding displayData array
  const mirrorId = {id:req.body.mirrorId, displayData: { type : Array , "default" : [] }};
  //add new mirror id by update current user then push to the mirror found by current username
  User.update({ username: res.req.user.username },
    { $push: { mirror: mirrorId } })
  .then(function(response) {
    console.log('whats the response or the post after then', response);
     res.sendStatus(201);
}).catch(function(err){
    console.log('Error in /mirror post', err);
    res.sendStatus(500);
  });
});

//put display data to User table
router.put('/', function(req, res) {
  console.log('whats the req body',req.body);
  User.update({id:}, {$set: {displayData:[]}}).then(function(response) {
    console.log('whats the response or the put after then', response);
     res.sendStatus(201);
}).catch(function(err){
    console.log('Error in /mirror post', err);
    res.sendStatus(500);
  });
});

module.exports = router;
