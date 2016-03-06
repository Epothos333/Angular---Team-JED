var app = angular.module('jedModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'index.html'
	});
	$routeProvider.when('/view1', {
		controller: 'controllerOne',
		templateUrl: 'view1.html'
	});
	$routeProvider.when('/view2', {
		controller: 'controllerTwo',
		templateUrl: 'view2.html'
	})
})