class Register extends REST {
  constructor() {
    super();
    this.app = app;
    // this.checkClickCreateUser();
    this.createUser();
  }

  // checkClickCreateUser() {
  //   let that = this;
  //   //function so pressing enter works to register a new account
  //
  //   $(document).on('submit', '#registerForm', function(e) {
  //     e.preventDefault();
  //     that.createUser();
  //   });
  // }

createUser(){
  $('button').click(async function(){
    let email, password, propsToChange;
    let demo = $(this).text();
    if(['login', 'register', 'registerAndLogin'].includes(demo)){
      email = prompt('Email');
      password = prompt('Password');
    }
    if(demo == 'change'){
      propsToChange = {password: prompt('Password')};
    }
    let result = await UserHandler[demo](
      propsToChange || email, password
    );
    $('pre').text(
      'Result:\n' + JSON.stringify(result,'','  ') + '\n\n' +
      'Info:\n' + JSON.stringify(result.info,'','  ')
    );
  });

  $('button').first().click();



}




}
