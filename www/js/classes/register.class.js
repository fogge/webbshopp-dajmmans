class Register extends REST {
  constructor() {
    super();
    this.app = app;
    this.createUser();
  }


async createUser(){
  $('.register').click(async function(){
    let email, password;
      email = $('#name').val();
      password = $('#password').val();

     await UserHandler(email, password);
  });



}




}
