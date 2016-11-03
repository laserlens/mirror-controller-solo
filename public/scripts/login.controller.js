angular.module('mirrorApp')
.controller('LoginController', LoginController);

function LoginController($http, $location, NavService) {
  //console.log('LoginController loaded');
  var ctrl = this;

  //reset NavService to false
  NavService.status.back = false;
  NavService.status.save = false;
  NavService.status.preview = false;
  NavService.status.logout = false;
  
  //post the username and password
  ctrl.login = function() {
    //console.log('logging in');
    $http.post('/login', {
      username: ctrl.username,
      password: ctrl.password
    }).then(function(response){
      //then send user to the mirrorSelector view
      $location.path('/mirrorSelector');
    }, function(error) {
      console.log('error loggin in', error);
      alert('Username or Pasword does not match');
    });
  };
}
