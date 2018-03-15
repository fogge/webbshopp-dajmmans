class Userpage2 extends REST {
  constructor(app) {
  	super();
  	this.app = app;
    this.getUsers();
    this.render('main', 1)
  }
  
  async getUsers() {
    let user = 'Dajmman';
    let currentUser = await User.find({firstname: user});
    console.log(currentUser);
    //this.renderOrders(orders);
    }
  	
}

