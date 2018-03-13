class ProductAvatar extends REST {
  constructor(product, app) {
    super();
    this.app = app;
    for (let value in product) {
      this[value] = product[value];
    }
    //this.materiel;
    this.getMaterielData();
  }

  async getMaterielData() {
    for (this.materiel of app.myMateriel) {
      this.render('.category-item');
    }
  }

  click() {
    if ($(event.target).hasClass('addToCart')) {
      this.app.shoppingCart.push(new CartItem(this));
      this.app.header.render();
    }
  } 

}