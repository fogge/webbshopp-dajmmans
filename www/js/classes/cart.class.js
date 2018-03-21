class Cart extends REST {
  constructor(app) {
    super();
    this.app = app;
    this.cartItems = [];
    if (this.app instanceof App){
      this.getCartItems();
    }
  }

  async getCartItems() {
    let all = new All();
    await this.loadCart();
    for (let item of this.app.shoppingCart) {
      let searchObj = await all.getResult({_id: item._id});
      searchObj = searchObj[0];
      searchObj.quantity = item.quantity;
      if (searchObj.stockBalance - item.quantity < 0) searchObj.stockWarning = true;
      this.cartItems.push(new CartItem(searchObj, this));
  }
    // if statement to not render on startpage.
    if(location.pathname == '/kassa'){
      $('main').empty();
      this.render();
    }
    this.saveCart();
  }

  async loadCart(){
    this.user = (await UserHandler.check());
    let cart = (await Cart.findOne({userId: this.user.info.query}));
    if (this.app.shoppingCart.length === 0 && cart){
      this.app.shoppingCart = cart.app.items
      this.app.header.render()
    }
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

  getTotalPriceExVat(){
    let totalPrice = this.getTotalPrice();
    let totalVat = this.getTotalVat();
    return totalPrice - totalVat;
  }

  async saveCart() {
    let userId = await UserHandler.check();
    userId = userId.info.query;
    let alreadyExists = (await Cart.findOne({userId: userId}));
    // Check if there is a cart with logged in user
    if (alreadyExists) {
      return await this.save({
        userId: userId,
        items: this.app.shoppingCart
      });
    } else {
      return await Cart.create({
        userId: userId,
        items: this.app.shoppingCart
      });
    }

  }

  approveCustomerData() {
    let adresses = {
      firstname: $('#cartfirstname').val(),
      lastname: $('#cartlastname').val(),
      adress: $('#cartadress').val(),
      postnr: $('#cartpostnr').val(),
      postort: $('#cartort').val(),
      phone: $('#cartphone').val(),
      email: $('#cartemail').val(),
      country: $('#cartcountry').val()
    }  
    return adresses;
  }

  async bankcardCheck() {
    let cardNumber = $('#cardNumber').val();
    let expireDate = $('#expireDate').val();
    let cvc = $('#cvc').val();
    let re16digit = /^\d{16}$/;

    if (!re16digit.test(document.cardNumber)) {
      alert("Please enter your 16 digit credit card numbers");
      return false;
    }

  }

  async confirmOrder() {

    if(this.app.shoppingCart.length !== 0) {
      let adresses = this.approveCustomerData();
      let totalPrice = this.getTotalPrice();
      let totalVat = this.getTotalVat();

      let order = await Order.create({
      orderno: 123,
      products: this.app.shoppingCart,
      orderdate: Date.now(),
      customerid: "String",
      price: totalPrice,
      vat: totalVat,
      adress: adresses
      });
      this.adjustStock(order);
      $('#confirmorder').modal('show');
      this.app.shoppingCart = [];
      this.cartItems = [];
    }

  }

  async adjustStock(order) {
    for(let product of order.result.products) {
      let myProduct;
      if (product.category == 'ingredient') {
        myProduct = await Ingredient.findOne({_id: product._id});
        myProduct.stockBalance -= product.quantity;
        await myProduct.save();
      } else if(product.category == 'book') { 
        myProduct = await Book.findOne({_id: product._id});
        myProduct.stockBalance -= product.quantity;
        await myProduct.save();
      } else if(product.category == 'materiel') {
        myProduct = await Materiel.findOne({_id: product._id});
        myProduct.stockBalance -= product.quantity;
        await myProduct.save();
      }
    }
  }

  click () {
    if ($(event.target).hasClass('confirmorder')) {
      this.bankcardCheck();
      this.confirmOrder();
    }
  }

}
