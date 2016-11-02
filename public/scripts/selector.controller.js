angular.module('mirrorApp')
.controller('SelectorController', SelectorController);

function SelectorController($http, $location, NavService, UserService) {
  //console.log('SelectorController loaded');
  var ctrl = this;
  //turn the ngshow true for the logout button on the navbar
  NavService.status.logout = true;
  //get a list of the mirror ids assaing to the user
  ctrl.listMirrors = function(){
    var username = UserService.name.currentUser;
    console.log('what is the username', username);
    //console.log('Listing mirrorIds');
    $http.get('/mirrors').then(function(response){
      //console.log('response that comes back', response);
      ctrl.mirrors = response.data;
    }, function(error){
      console.log('error making request', error);
    });
  };

}
