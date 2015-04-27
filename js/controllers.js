// List page
app.controller("MovieController", ['$scope', '$http', function($scope, $http) {

	// Disable browser security to load this - if you are running file:///...index.html
	$http.get('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=10').success(function(data){
		
		$scope.movies = data.movies;

	}).error( function() {
		console.log('-> We have an error!');
	});
}]);

// Details page
app.controller("DetailsController", ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce) {

	$http.get('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=10').success(function(data){
		$scope.movies = data.movies;

		$scope.itemId = $routeParams.itemId;


		angular.forEach($scope.movies, function(value, key){
			if(value.id == $scope.itemId)
			{
				$scope.details = value;
			}
		});

	}).error( function() {
		console.log('-> We have an error!');
	});
}]);









