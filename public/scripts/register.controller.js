angular.module('mirrorApp')
.controller('RegisterController', RegisterController);

function RegisterController($http, $location) {
  console.log('RegisterController loaded');
  var ctrl = this;

  ctrl.register = function() {
    console.log('registering new user');
    $http.post('/register', {
      username: ctrl.username,
      password: ctrl.password,
      mirrorId: ctrl.mirror.id
    }).then(function(response){
      console.log('whats the register response',response);
      $location.path('/login');
    }, function(error) {
      console.log('error registering', error);
    });
  };
}
