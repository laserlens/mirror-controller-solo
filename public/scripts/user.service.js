angular.module('mirrorApp')
.service('UserService', UserService);

//store the current usersname in this service
function UserService () {
  var currentUser ={username:'', displayData:[]};
  return{user:currentUser};
}
