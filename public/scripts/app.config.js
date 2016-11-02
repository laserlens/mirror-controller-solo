// routing
angular.module('mirrorApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController as register'
  }).when('/mirrorSelector', {
    templateUrl: 'views/mirrorSelector.html',
    controller: 'SelectorController as selector'
  }).otherwise({
    templateUrl: 'views/login.html',
    controller: 'LoginController as login'
  });
});
