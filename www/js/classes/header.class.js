class Header extends REST {
  constructor(app) {
    super();
    this.app = app;
    this.items = [
      new HeaderItem('Startpage', '/'),
      new HeaderItem('Materiel', '/materiel'),
      new HeaderItem('Böcker', '/bocker'),
      new HeaderItem('Ingredienser', '/ingredienser'),
      new HeaderItem('Om oss', '/om_oss')
    ];
    this.setupHandler();
    this.setupHandlerRegister();
  }

  async setActive(url) {
    for (let item of this.items) {
      item.active = url == item.url;
    }
  }

  setupHandler() {
    $(document).on('click', '.searchbtn', (event) => {
      event.preventDefault();
      Search.searchQuery = $('.inputsearch').val();
      $('.searchbtn').val('');
    });
  }

  setupHandlerRegister(){
    $(document).on('click', '.register', (event) =>{
      event.preventDefault();
    });
  }
}
