class Logout extends REST {
  constructor() {
    super();
    let that = this;
    $(document).on('click', '#logoutBtn', function(e) {
      console.log('wsdfgh');
     e.preventDefault();
     that.logoutUser();
   });
  }

  async logoutUser(){
    let result = await UserHandler.logout(User);
  }


}
