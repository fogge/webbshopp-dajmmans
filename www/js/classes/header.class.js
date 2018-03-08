class Header extends REST {
  constructor() {
    super();
    this.app = app;
    this.items = [
      new HeaderItem('Startpage', '/'),
      new HeaderItem('Materiel', '/materiel'),
      new HeaderItem('Böcker', '/bocker'),
      new HeaderItem('Ingredienser', '/ingredienser'),
      new HeaderItem('Om oss', '/om_oss')
    ];

  }
  async setActive(url) {
    for (let item of this.items) {
      item.active = url == item.url;
    }
  }
}
