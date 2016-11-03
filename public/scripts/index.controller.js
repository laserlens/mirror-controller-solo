angular.module('mirrorApp')
.controller('IndexController', IndexController);

function IndexController($http, $location, NavService) {

  //console.log('IndexController loaded');
  var index = this;
  //ngshow truthyness controls
  //back button truthyness
  index.navStatusB = NavService.status;
  //save button truthyness
  index.navStatusS = NavService.status;
  //preview button truthyness
  index.navStatusP = NavService.status;
  //logout button truthyness
  index.navStatusL = NavService.status;
}
