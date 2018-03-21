class HeaderButton extends REST {
  constructor(app) {
    super();
    this.app = app;
    this.templateNo = '';
  }
  async loginCheck(){
    let loggedInUser = await UserHandler.check();
    loggedInUser = loggedInUser[0] && loggedInUser[0].result && loggedInUser[0].result._id;
    this.templateNo = loggedInUser?'2':'';
    $('#headerButton').empty();
    this.render('#headerButton', this.templateNo);
  }
}
