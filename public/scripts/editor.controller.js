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
    ctrl.zip = null;
    wModal.style.display = "none";
  };//end of weather get


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

//time modal controls
// Get the modal
var tModal = document.getElementById('timeModal');

// When the user clicks the button, open the modal
ctrl.timeOn = function() {
    tModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
ctrl.timeOff = function() {
    tModal.style.display = "none";
}

//news modal controls
// Get the modal
var nModal = document.getElementById('newsModal');

// When the user clicks the button, open the modal
ctrl.newsOn = function() {
    nModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
ctrl.newsOff = function() {
    nModal.style.display = "none";
}

//news modal controls
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
    if (event.target == mModal||event.target == wModal||event.target == nModal||event.target == tModal) {
        mModal.style.display = "none";
        wModal.style.display = "none";
        nModal.style.display = "none";
        tModal.style.display = "none";
    }
}


}//end of EditorController function
