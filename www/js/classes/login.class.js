class Login extends REST {
  constructor(app) {
    super();
    this.app = app;
    let that = this;

    // logged in
    $(document).on('submit', '#loginForm', function(e) {
     e.preventDefault();
     that.loginUser();

   });
  }

  async loginUser(){
    let email = $('#loginEmail').val();
    let password = $('#loginPassword').val();

    let result = await UserHandler.login(email, password);
    if (result.info.loginOk == true) {
      $('#loginSuccess').removeClass('d-none');
      app.header.button.loginCheck();
      $('#headerButton').empty();
    }
    else{
      $('#loginFail').removeClass('d-none');
      app.header.button.loginCheck();
      $('#headerButton').empty();
      setTimeout(() => {$('#loginFail').addClass('d-none');}, 2000);


    }
  }


}
