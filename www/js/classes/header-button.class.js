class HeaderButton extends REST {
  constructor() {
    super();
    this.templateNo = '';
  }
  async loginCheck(){
    let loggedInUser = await UserHandler.check();
    loggedInUser = loggedInUser[0] && loggedInUser[0] && loggedInUser[0]._id;
    this.templateNo = loggedInUser?'2':'';
    $('#headerButton').empty();
    this.render('#headerButton', this.templateNo);
  }
}
