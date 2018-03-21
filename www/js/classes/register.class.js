class Register extends REST {
  constructor() {
    super();

    let that = this;

    $(document).on('submit', '#registerForm', function(e) {
     e.preventDefault();
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

     this.result = await UserHandler.register(email, password, firstName, lastName, adress, postnr, postOrt);
     if(this.result.result.error){
       $('#regFail').removeClass('d-none');
       setTimeout(() => {$('#regFail').addClass('d-none');}, 3000);
     }
     else{
        $('#regSuccess').removeClass('d-none');
     }
  }

}
