angular.module('mirrorApp')
.service('NavService', NavService);

function NavService () {
  var active ={logout:false, preview:false, save:false, back:false};
  return{status:active};
}
