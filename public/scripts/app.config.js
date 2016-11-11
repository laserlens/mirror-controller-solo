// routing
angular.module('mirrorApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController as register'
  }).when('/mirrorSelector', {
    templateUrl: 'views/mirrorSelector.html',
    controller: 'SelectorController as selector'
  }).when('/editor', {
    templateUrl: 'views/editor.html',
    controller: 'EditorController as editor'
  }).when('/fullscreen', {
    templateUrl: 'views/fullscreen.html',
    controller: 'EditorController as editor'
  }).otherwise({
    templateUrl: 'views/login.html',
    controller: 'LoginController as login'
  });
});
