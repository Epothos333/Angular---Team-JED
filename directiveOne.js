var app = angular.module('jedModule');

app.directive('directiveOne', function() {
	var vm = this
	vm.restrict = 'EA';
	vm.template= '<h1>Here Comes the Angular, Kids!!!</h1>';
	vm.replace= false;
	return vm;
});