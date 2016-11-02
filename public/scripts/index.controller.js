angular.module('mirrorApp')
.controller('IndexController', IndexController);

function IndexController($http, $location, NavService) {
  console.log('IndexController loaded');
  var index = this;
  index.navStatusB = NavService.status;
  index.navStatusS = NavService.status;
  index.navStatusP = NavService.status;
  index.navStatusL = NavService.status;
}
