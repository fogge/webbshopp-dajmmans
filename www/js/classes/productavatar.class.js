class ProductAvatar extends REST {
  constructor(product, app) {
    super();
    this.app = app;
    this.quantity = 1;
    for (let value in product) {
      this[value] = product[value];
    }

  }

  click() {
    if ($(event.target).hasClass('addToCart') && this.stockBalance) {   
       
      const checkShoppingCart = (checkObj) => {
        for (let product of this.app.shoppingCart) {
          if (product._id == checkObj._id) {
            product.quantity += 1;
            return false;
          }
        }
        return true;
      }
      if (this.app.shoppingCart == [] || checkShoppingCart(this)) this.app.shoppingCart.push({_id: this._id, quantity: this.quantity});

      this.app.header.render();
      $(event.target).addClass("bg-success").text('Tillagd').delay(1000).queue(function(next) {
        $(this).removeClass('bg-success').text('Köp');
        next();
      });
    }
  }

}
