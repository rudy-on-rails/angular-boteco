Account = function(){
	var beersYouHad = [];
	
	this.addBeer = function(beer){
		beersYouHad.push(beer);
	}	

	this.removeBeer = function(beer){
		if (this.numberOfBeers() > 0)
			beersYouHad.pop();
	}	

	this.numberOfBeers = function(){
		return beersYouHad.length;
	}	

	this.beersByType = function(){		
		var beerCounts = {};
		var beersByTypeArray = [];
		var idx = 0;
		angular.forEach(beersYouHad, function(beer){
			if (beerCounts[beer.getName()] == undefined)
				beerCounts[beer.getName()] = 0;
			beerCounts[beer.getName()]++;
		});
		angular.forEach(beerCounts, function(value, key){
			beersByTypeArray[idx] = {name: key, count: value};
			idx++;
		})
		return beersByTypeArray;
	}
}