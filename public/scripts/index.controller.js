angular.module('mirrorApp')
.controller('IndexController', IndexController);

function IndexController($http, $location, NavService) {

  //console.log('IndexController loaded');
  var index = this;
  //ngshow truthyness controls
  //back button truthyness
  index.navStatusB = NavService.status;
  //save button truthyness
  index.navStatusS = NavService.status;
  //preview button truthyness
  index.navStatusP = NavService.status;
  //logout button truthyness
  index.navStatusL = NavService.status;

  //put nodlist into array and save array to database
  index.save = function () {
    var data = document.querySelectorAll("#screen");
    var elements = Array.from(data)
    console.log(data);
    console.log(elements);
  }

  //fullscreen controls trigger by clicking mirror design
  //adds the nessary prefix for fullscreen api
  var pfx = ["webkit", "moz", "ms", "o", ""];
  function RunPrefixMethod(obj, method) {

     var p = 0, m, t;
      while (p < pfx.length && !obj[m]) {
        m = method;
        if (pfx[p] == "") {
           m = m.substr(0,1).toLowerCase() + m.substr(1);
           }
        m = pfx[p] + m;
        t = typeof obj[m];
        if (t != "undefined") {
          pfx = [pfx[p]];
          return (t == "function" ? obj[m]() : obj[m]);
          }
      p++;
     }
   }

   index.fullScreen = function() {
    var e = document.getElementById("screen");

    if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
      RunPrefixMethod(document, "CancelFullScreen");
    }
    else {
      RunPrefixMethod(e, "RequestFullScreen");
    }

   }

}//end of IndexController
