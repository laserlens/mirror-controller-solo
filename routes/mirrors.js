const router = require('express').Router();
const User = require('../models/user');

//get the user's data
router.get('/', function(req, res){
  console.log('whats the body', req.body);
  // dataFromTheDatabase is the list of documents that match the query
  // all the users in the database
  User.find([]).then(function(dataFromTheDatabase){
    //console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

module.exports = router;
