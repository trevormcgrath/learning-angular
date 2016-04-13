//Routes
myWeatherApp.config( function ($routeProvider) {
	
	$routeProvider

	.when('/',{
		templateUrl: 'pages/homepage.html',
		controller:'homepageController'
	})

	.when('/forecast',{
		templateUrl: 'pages/forecast.html',
		controller:'forecastController'
	})

	.when('/forecast/:numberOfDays',{
		templateUrl: 'pages/forecast.html',
		controller:'forecastController'
	})

});