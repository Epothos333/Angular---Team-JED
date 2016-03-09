var app = angular.module('jedModule');

app.directive('directiveOne', function() {
	var vm = this
	vm.restrict = 'EA';
	vm.template= '<h4>EveryBody Look at me!</h4>';
	vm.replace= false;
	return vm;
	
});