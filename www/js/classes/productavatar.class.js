class ProductAvatar extends REST {
  constructor(product, app) {
    super();
    this.app = app;
    for (let value in product) {
      this[value] = product[value];
    }

  }

  click() {
    if ($(event.target).hasClass('addToCart')) {
      this.app.shoppingCart.push(new CartItem(this));
      this.app.header.render();
    }
  }  

}