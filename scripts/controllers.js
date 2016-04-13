//Controllers
myWeatherApp.controller('homepageController', ['$scope', '$location','$resource', 'cityNameShare', function($scope, $location, $resource, cityNameShare) {
    
	$scope.city = cityNameShare.city;

	$scope.$watch('city', function(){
		cityNameShare.city=$scope.city;
	});

	$scope.submit = function() {
        $location.path("/forecast");
    };
    
    
}]);

myWeatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityNameShare', 'weatherDataService', function($scope, $routeParams, cityNameShare, weatherDataService) {
	
	$scope.city = cityNameShare.city;
	$scope.numberOfDays=$routeParams.numberOfDays || '3';

	$scope.weatherResult = weatherDataService.getWeather($scope.city, $scope.numberOfDays);

	$scope.toFahrenheit = function(degreesKelvin) {
		return Math.round( (1.8 * (degreesKelvin-273)) + 32 );
	};

	$scope.dateFixer = function(date){
		return new Date( date * 1000 );
	};

	console.log($scope.weatherResult);

	$scope.$watch('city', function(){
		cityNameShare.city=$scope.city;
	});

}]);