angular.module('mirrorApp')
.service('NavService', NavService);

//controls the truthyness for the ngshow on the navbar in the index.html
function NavService () {
  var active ={logout:false, preview:false, save:false, back:false};
  return{status:active};
}
