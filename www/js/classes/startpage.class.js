class Startpage extends REST {
  constructor(app) {
    super();
  	this.homepageAvatars = [];
		this.result = All.allProducts.filter(ingredients => 'Ingredient' == ingredients.constructor.name).splice(0, 4);			
		this.result.concat(All.allProducts.filter(materiel => 'Matriel' == materiel.constructor.name).splice(0, 4));			
		// result = All.allProducts.filter(book => 'Book' == book.constructor.name).splice(0, 4);			
		console.log("this.result", this.result)
		
		console.log(All.allProducts);  
  	this.renderAvatarsStartpage();
	}



  renderAvatarsStartpage(){
  	for(let product of this.result) {
	  	console.log("product",product.result)
	  	this.homepageAvatars.push(new ProductAvatar(product.result, this.app));

  	}



	}
  
}
