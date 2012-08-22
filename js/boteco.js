angular.module('boteco', []).
config(function($routeProvider) {
	$routeProvider.
	when('/beers', {controller:BotecoController, templateUrl:'beer_count.html'}).
	otherwise({redirectTo:'/beers'});
});