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
  	this.sortOrders(orders);
  	}

	sortOrders(orders){
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


  /*
  Gammal userpage som funkar!!!
  Spara tills den nya funkar...
  Object.assign(Userpage.prototype, { template1(){ return `
<div class="my-4">
  <div class="row">
    <div class="col-12">
    	<h3 class="text-center mt-5 mb-5">Du är inloggad som: ${this.user}</h3>
    	<h5 class="mb-3">Dina aktuella ordrar:</h5>
      <div id="accordion" class="active-orders">
      	${this.activeOrders.length == 0 ? 'Du har inga aktuella ordrar, beställ genast!' : this.activeOrders.render()}
			<h5 class="mb-3 mt-5">Orderhistorik:</h5>
      <div id="accordion" class="history-orders">
      	${this.oldOrders.length == 0 ? 'Du har ingen orderhistorik än!' : this.oldOrders.render()}
			</div>

    </div>
  </div>
</div>
`;}});
*/
