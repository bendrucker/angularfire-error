'use strict';

describe('controllers', function(){
    var myCtrl, _scope, $timeout;
  beforeEach(module('myApp'));
  beforeEach(inject(function($rootScope, $window, $firebase, $controller, _$timeout_) {
    _scope = $rootScope.$new();
    $timeout = _$timeout_;
    
    var genFB = function(location) {
      return $firebase(new $window.Firebase('https://tagged-foosball.firebaseio.com/' + location));
    };
    
    myCtrl = $controller('MyCtrl', {
      $scope: _scope,
      genFB: genFB
    });
  }));

  it('should resolve a promise', function (done) {
    var run = false;
    _scope.addTest().then(function() {
      console.log('added');
      run = true;
    });
    setTimeout(function () {
      $timeout.flush();
      expect(run).toBe(true);
      done();
    }, 500);
  });
});
