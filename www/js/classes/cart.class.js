class Cart extends REST {
  constructor(app) {
    super();
    this.app = app;
    this.cartItems = [];
    this.getCartItems();
  }

  async getCartItems() {
    let all = new All();
    for (let item of this.app.shoppingCart) {
      let searchObj = await all.getResult({_id: item._id});
      searchObj = searchObj[0].result;
      searchObj.quantity = item.quantity;
      if (searchObj.stockBalance - item.quantity < 0) searchObj.stockWarning = true;
      this.cartItems.push(new CartItem(searchObj, this));
    }
    return this.render();
  }

  getTotalPrice(){
    let totalPrice = 0;
    for (let cartItem of this.cartItems) {
      totalPrice += cartItem.price * cartItem.quantity;
    }
    return totalPrice;
  }

  getTotalVat(){
    let totalVat = 0;

    for (let cartItem of this.cartItems) {
      // Calculating vat off the set price
      if (cartItem.vatRate == 6) {
        totalVat += (cartItem.price * 0.0566) * cartItem.quantity;
      } else if (cartItem.vatRate == 12) {
        totalVat += (cartItem.price * 0.1071) * cartItem.quantity;
      } else {
        totalVat += (cartItem.price * 0.2) * cartItem.quantity;
      }
    }
    totalVat = Math.round( totalVat * 10 ) / 10;
    if (totalVat == 0){return totalVat;}
    if (totalVat % 1 != 0) {
      return totalVat += '0';
    } else {
      return totalVat;
    }
  }

  approveCustomerData() {

     return true;
  }

  async confirmOrder() {

    if(this.app.shoppingCart.length !== 0 && this.approveCustomerData()) {

      this.app.shoppingCart = [];
      this.cartItems = [];

      let order = await Order.create({
      orderno: 123,
      products: ["String"],
      status: "String",
      orderdate: Date.now(),
      customerid: "String",
      price: 123,
      vat: Number
    } );
      console.log('din beställning är lagd', order);
      $('#confirmorder').modal('show');
    }

  }

  click () {
    if ($(event.target).hasClass('confirmorder')) {
      this.confirmOrder();
    }
  }

}
