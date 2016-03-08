var app = angular.module('jedModule');


app.controller('controllerOne', ['$scope', 'jsonService', function($scope, jsonService) {

	var theTitles = [];

	jsonService.then(function(success) {
		for (var i = 0; i <15; i++) {
		theTitles.push(success.data.data.children[i].data.title);
		}
	});
	$scope.redditTitles = theTitles
}]);
