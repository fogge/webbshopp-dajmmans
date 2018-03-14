class Logout extends REST {
  constructor() {
    super();
    let that = this;
    $(document).on('click', '#logoutBtn', function(e) {
      console.log('Logged out');
     e.preventDefault();
     that.logoutUser();
   });
  }

  async logoutUser(){
    let result = await UserHandler.logout(User);
    $('#logoutSuccess').removeClass('d-none');
    setTimeout(() => {$('#logoutSuccess').addClass('d-none');}, 2000);
  }


}
