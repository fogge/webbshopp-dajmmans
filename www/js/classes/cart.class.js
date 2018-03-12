class Cart extends REST {
  constructor(app) {
    super();
    this.app = app;
    this.cartItems = this.app.shoppingCart;
    this.render();

  }

  newInstances() {
    this.app.cart.forEach((item) => {
      this.cartItems.push(new CartItem(item, this.app));
    });
    this.render();
  }
}
