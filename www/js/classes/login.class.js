class Login extends REST {
  constructor() {
    super();
    let that = this;

    $(document).on('submit', '#loginForm', function(e) {
      console.log('Logged in');
     e.preventDefault();
     that.loginUser();
   });
  }

  async loginUser(){
    let email = $('#loginEmail').val();
    let password = $('#loginPassword').val();

    let result = await UserHandler.login(email, password);
    $('#loginSuccess').removeClass('d-none');
  }
}
