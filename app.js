var app = angular.module('jedModule', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     	 when('/view1', {
        templateUrl: 'view1.html',
        controller: 'controllerOne'
      }).
      when('/view2', {
        templateUrl: 'view2.html',
        controller: 'controllerTwo'
      });
  }]);