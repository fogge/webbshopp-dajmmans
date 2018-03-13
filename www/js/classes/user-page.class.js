class Userpage extends REST {
  constructor(app) {
  	super();
  	this.app = app;
  	this.searchResult = [];
		this.getOrders();

  }
  
  async getOrders() {
  	let user = 'Dajmman Dajmmsson';
  	let orders = await Order.find({customerid: user});
  	console.log( orders);
  	this.sortOrders(orders);
  	}

	sortOrders(orders){
		console.log('träff' + orders)
		let activeOrders = [];
  	let oldOrders = [];
  	let nowDate = new Date;
  	console.log(nowDate);
  	orders.forEach( (product) => {
  		if( +product.result.orderdate > +nowDate){
  		console.log('Gamla ordrar' + product.result.orderdate);
  		}
	});

  	
  }

  /*async getSearchResult() {

    let searchResultFromMongo = await Ingredient.request('ingredients', 'get', {});
    searchResultFromMongo.result.forEach( (product) => {
      this.searchResult.push(new ProductAvatar(product));
    })
    return this.render();
  }*/

}


/*
const searchObj = {title: {$regex: this.query, $options: 'i'}};
    let mongoResult;
    if(mongoCollection === 'Ingredient') mongoResult = await Ingredient.find(searchObj);
    */




/*
class Startpage extends REST {
  constructor() {
    super();
  	this.searchResult = [];
    this.getSearchResult();
  }

  async getSearchResult() {

    // Hardcoded search on ingredients collection with title
    let searchResultFromMongo = await Ingredient.request('ingredients', 'get', {});
    searchResultFromMongo.result.forEach( (product) => {
      this.searchResult.push(new ProductAvatar(product));
    })
    return this.render();
  }
}
*/