class ProductAvatar extends REST {
  constructor(product, app) {
    super();
    this.app = app;
    for (let value in product) {
      this[value] = product[value];
    }
    console.log('avatar');
    
  }

  click() {
    if ($(event.target).hasClass('addToCart')) {
      this.app.shoppingCart.push(new CartItem(this));
      this.app.header.render();
    }

    let that = this;
    $(document).on("click", '.product-title', function () {
      that.productId = $(this).attr('id');
      that.app.productPage.getProduct(that.productId);
      //that.app.productPage = new ProductPage(this.app);
     // that.getProduct(that.productId);
    });
  } 

}