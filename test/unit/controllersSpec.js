'use strict';

describe('controllers', function(){
    var myCtrl, _scope, _rootScope;
  beforeEach(module('myApp'));
  beforeEach(inject(function($rootScope, $window, $firebase, $controller) {
    _scope = $rootScope.$new();
    _rootScope = $rootScope;
    
    var genFB = function(location) {
      return $firebase(new $window.Firebase('https://tagged-foosball.firebaseio.com/' + location));
    };
    
    myCtrl = $controller('MyCtrl', {
      $scope: _scope,
      genFB: genFB
    });
  }));

  it('should resolve a promise', function(done) {
    _scope.addTest().then(function() {
      console.log('resolved within test');
      done();
    });
  });
});
