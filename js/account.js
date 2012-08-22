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
}