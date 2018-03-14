class Register extends REST {
  constructor() {
    super();

    let that = this;

    $(document).on('submit', '#registerForm', function(e) {
      console.log('wsdfgh');
     e.preventDefault();
     that.registerUser();
   });
  }

  async registerUser(){

    let email = $('#email').val();
    let password = $('#password').val();

    let result = await UserHandler.register(email, password);
  }

}
