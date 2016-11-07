angular.module('mirrorApp')
.service('NewsService', NewsService);

function NewsService($http) {

  //urls and key for newsapi.org
  var key = '225210fb1b144cf9891abdb07a655153';
  var sources = 'https://newsapi.org/v1/sources?language=en'


  //get the forecast for disired city
  this.sourceSearch = function () {
   return $http.get(sources)
       .then(function(response){
         //console.log('whats the news',response);
         // returns source data back to controller
         return response;
    });//end of get
  };//end of sourceSearch

}//end of NewsService
