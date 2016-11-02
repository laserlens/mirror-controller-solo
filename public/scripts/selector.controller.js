angular.module('mirrorApp')
.controller('SelectorController', SelectorController);

function SelectorController($http, $location, NavService) {
  console.log('SelectorController loaded');
  var ctrl = this;
  NavService.status.logout = true;
}
