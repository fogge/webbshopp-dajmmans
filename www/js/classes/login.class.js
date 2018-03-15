class Login extends REST {
  constructor() {
    super();
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
    $('#loginSuccess').removeClass('d-none');
  }
}
