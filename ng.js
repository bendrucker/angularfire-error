'use strict';

angular.module('myApp', ['firebase'])
.service('genFb', function($window, $firebase) {
  return function(location) {
    return $firebase(new $window.Firebase('https://sizzling-fire-2793.firebaseio.com/' + location));
  };
})
.controller('MyCtrl', function($scope, genFb) {
  $scope.tests = genFb('tests');
  
  $scope.addTest = function() {
    return $scope.tests.$add({
      name: 'Test',
      number: 42
    }).then(function(ref) {
      console.log('resolved');
    });
  };
});