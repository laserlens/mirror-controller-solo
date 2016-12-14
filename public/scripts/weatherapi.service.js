angular.module('mirrorApp')
.service('WeatherService', WeatherService);

function WeatherService($http) {
  var invocation = new XMLHttpRequest();
  //urls for weather api
  var cityLookup ='https://api.wunderground.com/api/0f6ff76f537e4c48/geolookup/q/'
  var forecast = 'https://api.wunderground.com/api/0f6ff76f537e4c48/forecast';


  //get the forecast for disired city
  this.citySearch = function (zip) {
   return $http.get(cityLookup + zip + '.json'+'/')
       .then(function(response){
         //console.log('whats the geolookup',response);
         var location = response.data.location.l
         // returns location data back to controller
         return location;
    });//end of get
  };//end of citySearch


  //get the forecast for disired city
  this.forecastSearch = function(location) {
   return $http.get(forecast + location + '.json'+'/')
       .then(WeatherService.forecast = function(response){
         //console.log('voice to text data',response);
         //var msg = new SpeechSynthesisUtterance(response.data.forecast.txt_forecast.forecastday["0"].fcttext);
         //window.speechSynthesis.speak(msg);
       //return forecast data as response back to the controller
       return response;
    });//end of get
  };//end of forecastSearch

}
