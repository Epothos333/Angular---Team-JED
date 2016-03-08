var app = angular.module('jedModule');

app.factory('jsonService', function($http) {

 return $http.get("https:www.reddit.com/r/aww.json");
});


