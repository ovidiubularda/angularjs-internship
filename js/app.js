var app = angular.module('popcorntime', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
		
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'MovieController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});

}]);
