var app = angular.module('jedModule');

app.controller('FizzBuzzCtrl', ['$scope', function($scope) {
      $scope.translate = function(value) {
        var ret = "";
        
        if (!value) return "";
        
        if (value % 3 === 0) ret += "Fizz";
        if (value % 5 === 0) ret += "Buzz";
        
        return ret || value;
      };
    }
]);