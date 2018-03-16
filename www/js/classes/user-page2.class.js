class Userpage2 extends REST {
  constructor(app) {
  	super();
  	this.app = app;
    this.getUsers({});
  }

  async getUsers(searchObj) {
    let user = 'Dajmman';
    this.currentUserInfo = await User.find(searchObj);
    this.currentUserInfo = this.currentUserInfo[0].result;
    console.log(this.currentUserInfo  );
    //this.renderOrders(orders);
    this.loopUserToValues(this.currentUserInfo);
  }

  loopUserToValues(userObject){
    for (let value in userObject) {
      this[value] = userObject[value];
    }
    this.render('main', 1)
  }


}
