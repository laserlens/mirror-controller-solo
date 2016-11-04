angular.module('mirrorApp')
.controller('EditorController', EditorController);

function EditorController($http, $location, NavService, UserService, WeatherService) {
  var ctrl = this;

  //show preview, save, and logout buttons
  NavService.status.save = true;
  NavService.status.preview = true;
  NavService.status.logout = true;

  //funtion for ng-submit event on add
  ctrl.weatherZip = function () {

    WeatherService.citySearch(ctrl.zip).then(function () {

    });
    ctrl.search = null;
  };//end of searchGiphy
}
