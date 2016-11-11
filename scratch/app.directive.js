//directive to remove element from the dom
var app = angular.module('mirrorApp');

app.directive('removeOnClick', function() {
    return {
        link: function(scope, elt, attrs) {
            scope.remove = function() {
                elt.html('');
            };
        }
    }
});
