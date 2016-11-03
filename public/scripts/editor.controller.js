angular.module('mirrorApp')
.controller('EditorController', EditorController);

function EditorController($http, $location, NavService) {
  var ctrl = this;

  //show preview and save buttons
  NavService.status.save = true;
  NavService.status.preview = true;
  
}
