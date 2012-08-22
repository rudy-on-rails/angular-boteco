function BotecoController($scope, $locale) {
	$scope.account = new Account();
	$scope.beerForms = {
		0: "What you're waiting for?!?",
		one: 'Just {} beer',
		two: '',
		other: "Now we're understanding each other... {} beers"
	};	
}

