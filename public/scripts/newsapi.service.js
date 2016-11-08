angular.module('mirrorApp')
.service('NewsService', NewsService);

function NewsService($http) {

  //urls for newsapi.org
  var sources = 'https://newsapi.org/v1/sources?language=en';
  var news = 'https://newsapi.org/v1/articles?source=';
  var sortBy = '&sortBy=top&apiKey=225210fb1b144cf9891abdb07a655153';

  //get the english language sources for users news
  this.sourceSearch = function () {
   return $http.get(sources)
       .then(function(response){
         //console.log('whats the news',response);
         // returns source data back to controller
         return response;
    });//end of get
  };//end of sourceSearch

  //get the news from the users source choice
  this.newsSearch = function (source) {
   return $http.get(news + source + sortBy)
       .then(function(response){
         //console.log('whats the news',response);
         // returns news data back to controller
        return response;
    },function(error){
      console.log('error making request for news', error.data);
    });//end of get
  };//end of sourceSearch


}//end of NewsService
