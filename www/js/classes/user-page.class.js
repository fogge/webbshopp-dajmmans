class Userpage extends REST {
  constructor(app) {
  	super();
  	this.app = app;
  	this.searchResult = [];
		this.getOrders();
		this.co = 0;

  }
  
  async getOrders() {
  	let user = 'Dajmman Dajmmsson';
  	let orders = await Order.find({customerid: user});
  	// console.log( orders);
  	this.sortOrders(orders);
  	}

	sortOrders(orders){
		let activeOrders = [];
  	let oldOrders = [];
  	
  	let nowDate = new Date();
        let month = nowDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = nowDate.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        let dateString = `${nowDate.getFullYear()}-${month}-${day}`
        this.renderOrders(orders, dateString);
	}

	async renderOrders(orders, dateString){
		
    try {

			orders.forEach( (product) => {
				this.co++;
  			let userpageItem = new UserpageItem(product.result, this.app, this.co);
  			this.searchResult.push(userpageItem);
  		});
		} catch (e) {
  			console.error('Strul med rendering');
  		}
  		return await this.render('main', 1);

	};
  	
  }
