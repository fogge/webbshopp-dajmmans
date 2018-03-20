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
    this.revealPassword();
  }

  revealPassword(){
    let that = this;
    $(document).on('click', '.btn-revealpassword', function(){
     if($('#password-area').text() == '******'){
      $('#password-area').empty();
      $('#password-area').text(that.password);
      $('.hide-show').text('Dölj');
      }
      else{
        $('#password-area').text('******');
        $('.hide-show').text('Visa');
      }
    })
    
  }

}
