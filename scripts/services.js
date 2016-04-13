//Service
myWeatherApp.service('cityNameShare', function(){
	
	this.city="San Diego, CA";

});

myWeatherApp.service('weatherDataService', ['$resource', function($resource) {
   
    this.getWeather = function(city, numberOfDays) {
        var weatherAPI = $resource(
        	"http://api.openweathermap.org/data/2.5/forecast/daily", 
        	{ callback: "JSON_CALLBACK", appid: '0b3b3b58472a84afba688518b99d8d14'}, 
        	{ get: { method: "JSONP" }}
        ); //perhaps make a imperial or metric call? Display either celcius or fahrenheit?
    
        return weatherResult = weatherAPI.get({ q: city, cnt: numberOfDays });
    };
    
}]);