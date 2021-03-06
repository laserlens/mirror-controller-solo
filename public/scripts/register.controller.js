angular.module('mirrorApp')
.controller('RegisterController', RegisterController);

function RegisterController($http, $location) {
  //console.log('RegisterController loaded');
  var ctrl = this;

//post the users data that they registered
  ctrl.register = function() {
    console.log('registering new user');
    $http.post('/register', {
      username: ctrl.username,
      password: ctrl.password,
      mirrorId: ctrl.mirror.id
    }).then(function(response){
      console.log('whats the register response',response);
      //then send the user to the mirrorSelector view
      $location.path('/login');
    }, function(error) {
      console.log('error registering', error);
    });
  };
}
