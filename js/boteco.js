app = angular.module('boteco', []);

app.config(function($routeProvider) {
	$routeProvider.when('/beers', {controller:BotecoController, templateUrl:'beer_count.html'}).when('/beers_detail', {controller:BotecoController, templateUrl:'beer_detail.html'}).otherwise({redirectTo:'/beers'});
});

app.run(function($rootScope) {
  $rootScope.account = new Account();
  $rootScope.beers = [
    new Beer("Skol"),
    new Beer("Antartica"),
    new Beer("Brahma"),
    new Beer("Heineken"),
    new Beer("Stella Artois")
  ]
});