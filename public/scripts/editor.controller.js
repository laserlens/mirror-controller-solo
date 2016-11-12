angular.module('mirrorApp')
.controller('EditorController', EditorController);

function EditorController($timeout, $http, $location, $compile, NavService,
                          UserService, WeatherService, NewsService ) {
  var ctrl = this;
  //store forecast data
  ctrl.forecasts = [];
  //store news data
  ctrl.topNews=[];
  //starts ng-show as false
  //ng-show for whats displayed on the fullscreen
  ctrl.activeW = false;
  ctrl.activeT = false;
  ctrl.activeN = false;
  ctrl.activeM = false;
  //ng-show for tools
  ctrl.weatherShow = false;
  ctrl.newsShow = false;
  ctrl.messageShow = false;
  ctrl.timeShow = false;

  //show preview, save, and logout buttons
  NavService.status.save = true;
  NavService.status.preview = true;
  NavService.status.logout = true;

  //show weather tools
  ctrl.weatherTools = function () {
    if (ctrl.weatherShow == false) {
      ctrl.weatherShow = true;
    }else {
      ctrl.weatherShow = false;
    }
  };
  //show message tools
  ctrl.messageOn = function () {
    if (ctrl.messageShow == false) {
      ctrl.messageShow = true;
    }else {
      ctrl.messageShow = false;
    }
  };
  //show time tools
  ctrl.timeTools = function () {
    if (ctrl.timeShow == false) {
      ctrl.timeShow = true;
    }else {
      ctrl.timeShow = false;
    }
  };



  //hide the element and reset the data
  //news reset
  ctrl.removeNews = function() {
    ctrl.topNews=[];
    ctrl.activeN = false;
  };
  //weather reset
  ctrl.removeWeather = function() {
    ctrl.forecasts = [];
    ctrl.activeW = false;
  };
  //hide the time
  ctrl.removeTime = function() {
    ctrl.activeT = false;
  };
  //message reset
  ctrl.removeMessage = function() {
    ctrl.activeM = false;
    ctrl.message = null;
  };

  //funtion for ng-submit event on add weather
  ctrl.weatherZip = function () {
    ctrl.loadingOn = true;
    //send zip code entered by user to get location for nearest weather tower
    WeatherService.citySearch(ctrl.zip).then(function(location) {
      console.log('whats the response in the controller', location);
      //send the location information to api to get back forecast data
      WeatherService.forecastSearch(location).then(function(response){
        //show weather div
        ctrl.activeW = true;
        //array of data needed from weather api
        ctrl.forecasts = response.data.forecast.simpleforecast.forecastday;
        console.log('whats the forecastSearch response',ctrl.forecasts);

      });
      ctrl.loadingOn = false;
    });
    ctrl.zip = null;
    wModal.style.display = 'none';
  };//end of weather get

  //time widget
  ctrl.clock = 'loading clock...'; // initialise the time variable
  ctrl.tickInterval = 1000 //ms

  var tick = function () {
    ctrl.clock = Date.now() // get the current time
    $timeout(tick, ctrl.tickInterval); // reset the timer
  }

  // Start the timer
  $timeout(tick, ctrl.tickInterval);

  //function to add the time
  ctrl.timeOn = function () {
    ctrl.activeT = true;
  }
  //function to add the message
  ctrl.showMessage = function () {
    ctrl.activeM = true;
  }

  //news api function
  ctrl.choice = function() {
    //ativate add button after user makes a selection
    ctrl.disable = false;
    //for loop to go through and find id that corisponds with the source the user selected
    for (var i = 0; i < ctrl.sources.length; i++) {
      if (ctrl.name == ctrl.sources[i].name) {
        ctrl.userSource = ctrl.sources[i].id;
      }};
    //console.log('what is the users source',ctrl.userSource);
    //get the news of the disired source
    NewsService.newsSearch(ctrl.userSource).then(function(response){
      // make a copy of object instead of storing object itself
      ctrl.topNews.push(angular.copy(response.data.articles));
      //console.log('whats the array of topNews',ctrl.topNews);

      //restart the marque when adding another news source
      var marquee = document.getElementsByClassName('marquee');
      for(var i = 0; i < marquee.length; i++) {
          marquee[i].start();
        };
        function resetSelectElement(selectElement) {
          selecElement.selectedIndex = 0;  // first option is selected
        };
    });
  }


// When the user clicks the button, show the news tools
ctrl.newsOn = function() {
    ctrl.activeN = true;
    if (ctrl.newsShow == false) {
      ctrl.newsShow = true;
    }else {
      ctrl.newsShow = false;
    }

    //get the sources to add to the selector
    NewsService.sourceSearch().then(function(response){
      //console.log('what are the sources to choose from', response.data.sources);
      ctrl.sources = response.data.sources
      //console.log('whats ctrl.sources', ctrl.sources);
    });
}


//use jquery-ui draggable feature with resizable
//weather widget draggable controls
$('#draggable').draggable({
  cursor: 'move',
  delay: 100,
  scroll: false,
  containment: 'parent'
})
.resizable({
  containment: 'parent',
  minHeight: 375,
  minWidth: 92,
  maxWidth: 289,
  resize: function( event, ui ) {
    // handle fontsize
    //console.log(ui.size); // gives you the current size of the div
    var size = ui.size;
    // change the values of the font-size
    $(this).css('font-size', (size.width * size.height)/7000 + 'px');
  }
});//end of the draggable weather element

//clock draggable element
$('#clock').draggable({
  cursor: 'move',
  delay: 100,
  scroll: false,
  containment: 'parent'
})
.resizable({
  containment: 'parent',
  maxWidth: 289,
  resize: function( event, ui ) {
    // handle fontsize here
    //console.log(ui.size); // gives you the current size of the div
    var size = ui.size;
    // change the values of the font-size
    $(this).css('font-size', (size.width * size.height)/1000 + 'px');
  }
});//end of the draggable clock element
//news draggable element
$('#news').draggable({
  cursor: 'move',
  delay: 100,
  scroll: false,
  containment: 'parent'
})
.resizable({
  containment: 'parent',
  maxWidth: 1000,
  resize: function( event, ui ) {
    // handle fontsize
    //console.log(ui.size); // gives you the current size of the div
    var size = ui.size;
    // change the values of the font-size
    $(this).css('font-size', (size.width * size.height)/1000 + 'px');
  }
});//end of the draggable news element
//message draggable element
$('#message').draggable({
  cursor: 'move',
  delay: 100,
  scroll: false,
  containment: 'parent'
})
.resizable({
  containment: 'parent',
  maxWidth: 500,
  resize: function( event, ui ) {
    // handle fontsize here
    //console.log(ui.size); // gives you the current size of the div
    var size = ui.size;
    // change the values of the font-size
    $(this).css('font-size', (size.width * size.height)/1000 + 'px');
  }
});//end of the draggable message element

// var x = document.querySelectorAll("#screen");
// console.log('whats the query',x);



}//end of EditorController function
