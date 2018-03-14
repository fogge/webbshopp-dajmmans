class CartItem extends REST {
  constructor(product, cart) {
    super();
    for (let value in product) {
      // This if statement is for fixing a bug in Base, else This gets wrong template
      if (value !== 'template') this[value] = product[value];
    }
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

  click(event){
    if ($(event.target).hasClass('cart-item-button-plus')) {
      if (this.stockBalance == this.quantity) {
        return null;
      }
      else {
        let shoppingCartGlobal = this.cart.app.shoppingCart.find((m) => this._id == m._id);
        shoppingCartGlobal.quantity += 1;
        this.quantity += 1;
        this.renderCart();
      }
    }

    if ($(event.target).hasClass('cart-item-button-minus')) {
      if (this.quantity == 1) {
        return null;
      }
      else {
        let shoppingCartGlobal = this.cart.app.shoppingCart.find((m) => this._id == m._id);
        shoppingCartGlobal.quantity -= 1;
        this.quantity -= 1;
        this.renderCart();
      }
    }
  }





}
