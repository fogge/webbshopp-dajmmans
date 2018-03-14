class CartItem extends REST {
  constructor(product, cart) {
    super();
    for (let value in product) {
      // This if statement is for fixing a bug in Base, else This gets wrong template
      if (value !== 'template') this[value] = product[value];
    }
    this.eventHandler();
    this.cart = cart;
  }

  getVatPerItem(){
    if (this.vatRate == 6) {
      return Math.round((this.price * 0.0566) * 10) / 10;
    } else if (this.vatRate == 12) {
      return Math.round((this.price * 0.1071) * 10) / 10;
    } else {
      return Math.round((this.price * 0.2) * 10) / 10;
    }
  }

  renderCart(){
    $('main').empty();
    this.cart.render('main');
  }

  eventHandler(){
    $(document).on('click', '#cart-item-button-plus', () => {
      this.quantity += 1;
      console.log(this.quantity);
      this.renderCart();
    });

    $(document).on('click', '#cart-item-button-minus', () => {
      this.quantity -= 1;
      console.log(this.quantity);
      this.renderCart();
    });
  }
}
