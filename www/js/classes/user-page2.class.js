class Userpage2 extends REST {
  constructor(app) {
  	super();
  	this.app = app;
    this.getUsers({});
  }

  async getUsers(searchObj) {
    let user = 'Dajmman';
    this.currentUserInfo = await UserInfo.find({firstName: user});
    this.currentUserInfo = this.currentUserInfo[0].result;
    this.loopUserToValues(this.currentUserInfo);
  }

  loopUserToValues(userObject){
    for (let value in userObject) {
      this[value] = userObject[value];
    }
    this.render('main', 1)
  }


}
