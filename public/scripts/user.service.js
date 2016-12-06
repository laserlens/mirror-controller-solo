angular.module('mirrorApp')
.service('UserService', UserService);

//store the current usersname and data in this service
function UserService () {
  var currentUser ={username:'', displayData:[], mirrorId:};
  return{user:currentUser};
}
