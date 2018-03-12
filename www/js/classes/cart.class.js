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


  getTotalPrice(){
    let totalPrice = 0;
    for (let cartItem of this.cartItems) {
      totalPrice += cartItem.price;
    }
    return totalPrice;
  }

  getTotalVat(){
    let totalVat = 0;

    for (let cartItem of this.cartItems) {
      // Calculating vat off the set price
      if (cartItem.vatRate == 6) {
        totalVat += cartItem.price * 0.0566;
      } else if (cartItem.vatRate == 12) {
        totalVat += cartItem.price * 0.1071;
      } else {
        totalVat += cartItem.price * 0.2;
      }
    }
    return Math.round( totalVat * 10 ) / 10;
  }
}
