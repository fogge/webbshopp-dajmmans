class Register extends REST {
  constructor() {
    super();

    let that = this;

    $(document).on('submit', '#registerForm', function(e) {
     e.preventDefault();
     that.userCheck();
     that.registerUser();
   });
  }

  async registerUser(){
    let email = $('#registerEmail').val();
    let password = $('#registerPassword').val();
    let firstName = $('#registerFirstName').val();
    let lastName = $('#registerLastName').val();
    let adress = $('#registerAdress').val();
    let postnr = $('#registerpostnr').val();
    let postOrt = $('#registerPostOrt').val();

    let result = await UserHandler.register(email, password, firstName, lastName, adress, postnr, postOrt);
  }

  async userCheck(){
    let test = $('#registerEmail').val();
    $('#regFail').removeClass('d-none');
  }

}
