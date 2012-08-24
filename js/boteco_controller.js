function BotecoController($scope, $locale) {
  $scope.beersByType = $scope.account.beersByType();

  $scope.beerForms = {
		0: "What you're waiting for?!?",
		one: 'Just {} beer',
		other: "Now we're understanding each other... {} beers"
	};	

  $scope.save = function(){
    var savedBeer = $scope.beer;    
    if (savedBeer != undefined)
      $scope.account.addBeer(savedBeer);
    else{
      // add error to form
    }      
  }
}

