var app = angular.module('jedModule');


app.controller('controllerOne', ['$scope', 'jsonService', function($scope, jsonService) {


	jsonService.then(function(success) {
		console.log(success.data);
	});
}]);
