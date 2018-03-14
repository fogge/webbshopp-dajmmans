class Header extends REST {
  constructor(app) {
    super();
    this.app = app;
    this.items = [
      new HeaderItem('Start', '/'),
      new HeaderItem('Materiel', '/materiel'),
      new HeaderItem('Böcker', '/bocker'),
      new HeaderItem('Ingredienser', '/ingredienser'),
      new HeaderItem('Om oss', '/om_oss'),
      new HeaderItem('Kassa', '/kassa', this.app)
    ];
  }

  async setActive(url) {
    for (let item of this.items) {
      item.active = url == item.url;
    }
    this.app.header.render();
  }
}
