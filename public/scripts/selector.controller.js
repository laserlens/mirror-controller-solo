angular.module('mirrorApp')
.controller('SelectorController', SelectorController);



function SelectorController($http, $location, NavService, UserService) {
  //console.log('SelectorController loaded');
  var ctrl = this;
  //hold the data that was gotten from data base
  ctrl.mirrors = [];

  //edit button starts disabled
  ctrl.disable = true;

  //turn the ngshow true for the logout button on the navbar
  NavService.status.logout = true;

  //function that recieves the input value of selected
  ctrl.select = function() {
    //ativate edit button after user makes a selection
    ctrl.disable = false;
    //attach the option value to ctrl.userMirror
    ctrl.userMirror = ctrl.id;
    //use ctrl.userMirror in the for loop to identifiy corrisponding displayData
    for (var i = 0; i < ctrl.mirrors.length; i++) {
      if (ctrl.userMirror == ctrl.mirrors[i].id) {
        ctrl.selectedDisplay = ctrl.mirrors[i].displayData;
      }
    }
    //put the selected mirror's displayData on the UserService
    UserService.user.displayData = ctrl.selectedDisplay;
    console.log('wow this worked', UserService.user.displayData);
  }

  //get a list of the mirror ids assaing to the user
  ctrl.listMirrors = function(){
    //current users username
    //ctrl.currentUserName = UserService.user.username;

    //get the array of mirrors to get the ids of the mirrors
    $http.get('/mirrors'/*, {
      username: ctrl.currentUserName
    }*/).then(function(response){
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
