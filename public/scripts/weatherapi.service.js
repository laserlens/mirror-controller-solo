angular.module('mirrorApp')
.service('WeatherService', WeatherService);

function WeatherService($http) {
  var key = '0f6ff76f537e4c48';
  var cityLookup ='http://api.wunderground.com/api/0f6ff76f537e4c48/geolookup/q/'
  var forecast = 'http://api.wunderground.com/api/0f6ff76f537e4c48/forecast/q/';

  var city = '';

  //get the forecast for disired city
  this.citySearch = function (zip) {
   return $http.get(cityLookup + zip + '.json')
       .then(function(response){
         var city = response.data.location.city;
         console.log('whats the city',city);
        //  $http.get(forecast + city.replace(' ','_') + '.json')
        //      .then(function(response){
        //      console.log('weather response', response);
             //return response.data.data;
           //});//end of get in get
    });//end of get
  };//end of forecastSearch


  //get the forecast for disired city
  this.forecastSearch = function (search) {
   return $http.get(forecast + city.replace(' ','_') + '.json')
       .then(function(response){
       console.log('search response', response);
       //return response.data.data;
    });//end of get
  };//end of forecastSearch

}
