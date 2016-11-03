angular.module('mirrorApp')
.service('UserService', UserService);

//store the current usersname in this service
function UserService () {
  var currentUser ={username:''};
  return{name:currentUser};
}
