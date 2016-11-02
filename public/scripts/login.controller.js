angular.module('mirrorApp')
.controller('LoginController', LoginController);

function LoginController($http, $location, UserService) {
  //console.log('LoginController loaded');
  var ctrl = this;
  //post the username and password
  ctrl.login = function() {
    console.log('logging in');
    $http.post('/login', {
      username: ctrl.username,
      password: ctrl.password
    }).then(function(response){
      //save the current users username to a service
      UserService.name.currentUser = response.config.data.username;
      //console.log('whats the UserService currentUser',UserService.name.currentUser);
      //then send user to the mirrorSelector view
      $location.path('/mirrorSelector');
    }, function(error) {
      console.log('error loggin in', error);
      alert('Username or Pasword does not match');
    });
  };
}
