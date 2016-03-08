var app = angular.module('jedModule');

app.directive('directiveOne', function() {
	return {
	restrict: 'EA',
	template: '<h4>EveryBody Look at me!</h4>',
	replace: false
	}
});