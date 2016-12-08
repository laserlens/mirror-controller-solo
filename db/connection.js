const mongoose = require('mongoose');

var dbRrl = process.env.MONGODB_URI || 'mongodb://localhost/rho';

exports.connect = function () {
  mongoose.Promise = global.Promise;
  mongoose.connect(dbRrl);

  var db = mongoose.connection;
  db.on('error', function(error){
    console.log('error connecting', error);
  });

  db.once('open', function(){
    console.log('connected to mongo');
  });
};
