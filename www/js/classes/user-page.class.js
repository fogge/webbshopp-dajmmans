class Userpage extends REST {
  constructor(app) {
  	super();
  	this.app = app;
  	this.activeOrders = [];
  	this.oldOrders = [];
		this.getOrders();
		this.co = 0;

  }
  
  async getOrders() {
  	let user = 'Dajmman Dajmmsson';
  	let orders = await Order.find({customerid: user});
  	this.renderOrders(orders);
  	}

	async renderOrders(orders){
		
    try {

			orders.forEach( (product) => {
				this.co++;
				this.user = product.result.customerid;
				let userpageItem = new UserpageItem(product.result, this.app, this.co);
				if(product.result.status == 'Skickad'){
  				this.oldOrders.push(userpageItem);
				} else {
  				this.activeOrders.push(userpageItem);
  			}
  		});
		} catch (e) {
  			console.error('Strul med rendering, försök igen!', (e));
  		}
  		$('main').empty();
  		return await this.render('main', 1);

	};
  	
  }