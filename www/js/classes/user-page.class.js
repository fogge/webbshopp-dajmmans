class Userpage extends REST {
  constructor() {
  	super();
  	this.activeOrders = [];
  	this.oldOrders = [];
    this.getUser();
		this.getOrders();
		this.co = 0;

  }

  async getUser(){
    this.user = await User.find();
  }

  async getOrders() {
  	let user = 'Dajmman Dajmmsson';
  	let orders = await Order.find({customerid: user});
  	this.renderOrders(orders);
  	}

	/*sortOrders(orders){
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
	}*/

	async renderOrders(orders){

    try {

			orders.forEach( (product) => {
				this.co++;
				this.user = product.result.customerid;
				let userpageItem = new UserpageItem(product.result, this.co);
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
