angular.module('mirrorApp')
.controller('SelectorController', SelectorController);

function SelectorController($http, $location, NavService) {
  //console.log('SelectorController loaded');
  var ctrl = this;
  //turn the ngshow true for the logout button on the navbar
  NavService.status.logout = true;

  //function that recieves the input value of elected
  ctrl.select = function() {
    ctrl.userMirror = ctrl.id;
    console.log('whats the ctrl.userMirror', ctrl.userMirror);
  }

  //get a list of the mirror ids assaing to the user
  ctrl.listMirrors = function(){

    //get the array of mirrors to get the ids of the mirrors
    $http.get('/mirrors').then(function(response){
      //console.log('response that comes back', response);
      //the array to ngReapet threw to get mirrorIds
      ctrl.mirrors = response.data;
      console.log('whats the mirrorId', ctrl.mirrors);
    }, function(error){
      console.log('error making request', error);
    });
  };

  //post the users new mirror id
  ctrl.regMirrorId = function() {
    $http.post('/mirrors', {
        mirrorId: ctrl.mirror.id
      }).then(function(response){
        //console.log('whats the selector controller response',response);
        //then run the get again
        ctrl.listMirrors();
        //clear the iput field for add mirror
        ctrl.mirror.id = null;
      }, function(error) {
        console.log('error adding mirror id', error);
      });
    };

}
