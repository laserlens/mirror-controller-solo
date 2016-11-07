angular.module('mirrorApp')
.controller('EditorController', EditorController);

function EditorController($timeout, $http, $location, $compile, NavService, UserService, WeatherService, NewsService) {
  var ctrl = this;
  //store forecast data
  ctrl.forecasts = [];
  //starts ng-show as false
  ctrl.activeW = false;
  ctrl.activeT = false;

  //show preview, save, and logout buttons
  NavService.status.save = true;
  NavService.status.preview = true;
  NavService.status.logout = true;

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
    wModal.style.display = "none";
  };//end of weather get

  //time widget
  ctrl.clock = "loading clock..."; // initialise the time variable
  ctrl.tickInterval = 1000 //ms

  var tick = function () {
    ctrl.clock = Date.now() // get the current time
    $timeout(tick, ctrl.tickInterval); // reset the timer
  }

  // Start the timer
  $timeout(tick, ctrl.tickInterval);

  //function to show the time
  ctrl.timeOn = function () {
    ctrl.activeT = true;
  }

  //news api function
  ctrl.choice = function() {
    //ativate add button after user makes a selection
    ctrl.disable = false;
    //attach the option value to ctrl.source
    ctrl.userSource = ctrl.scource;
  }




//weather modal controls
// Get the modal
var wModal = document.getElementById('weatherModal');

// When the user clicks the button, open the modal
ctrl.weatherOn = function() {
    wModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
ctrl.weatherOff = function() {
    wModal.style.display = "none";
}

// //time modal controls
// // Get the modal
// var tModal = document.getElementById('timeModal');
//
// // When the user clicks the button, open the modal
// ctrl.timeOn = function() {
//     tModal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// ctrl.timeOff = function() {
//     tModal.style.display = "none";
// }

//news modal controls
// Get the modal
var nModal = document.getElementById('newsModal');

// When the user clicks the button, open the modal
ctrl.newsOn = function() {
    nModal.style.display = "block";
    NewsService.sourceSearch().then(function(response){

    });
}
// When the user clicks on <span> (x), close the modal
ctrl.newsOff = function() {
    nModal.style.display = "none";
}

//message modal controls
// Get the modal
var mModal = document.getElementById('messageModal');

// When the user clicks the button, open the modal
ctrl.messageOn = function() {
    mModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
ctrl.messageOff = function() {
    mModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close all modals
window.onclick = function(event) {
    if (event.target == mModal||event.target == wModal||event.target == nModal) {
        mModal.style.display = "none";
        wModal.style.display = "none";
        nModal.style.display = "none";
        //tModal.style.display = "none";
    }
}


//use jquery-ui draggable feature with resizable
//weather widget draggable controls
$("#draggable").draggable({
  cursor: "move",
  delay: 100,
  scroll: false,
  containment: "parent"
})
.resizable({
  containment: "parent",
  minHeight: 375,
  minWidth: 92,
  maxWidth: 289,
  resize: function( event, ui ) {
    // handle fontsize here
    //console.log(ui.size); // gives you the current size of the div
    var size = ui.size;
    // something like this change the values according to your requirements
    $(this).css("font-size", (size.width * size.height)/7000 + "px");
  }
});//end of the draggable weather element

//clock draggable element
$("#clock").draggable({
  cursor: "move",
  delay: 100,
  scroll: false,
  containment: "parent"
})
.resizable({
  containment: "parent",
  maxWidth: 289,
  resize: function( event, ui ) {
    // handle fontsize here
    //console.log(ui.size); // gives you the current size of the div
    var size = ui.size;
    // something like this change the values according to your requirements
    $(this).css("font-size", (size.width * size.height)/1000 + "px");
  }
});

}//end of EditorController function
