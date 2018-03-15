class ProductPage extends REST {
  constructor(app) {
    super();
    this.app = app;
  }

  async getProduct(productId){
    this.productId = productId;
    this.productSelected = All.allProducts.find( selectedProduct => selectedProduct.result._id === productId);
    this.productSelected = this.productSelected.result;
    this.productSelected.quantity = 1;
    
  }

  click() {
    if ($(event.target).hasClass('addToCart') && this.productSelected.stockBalance) {
      const checkShoppingCart = (checkObj) => {
        for (let product of this.app.shoppingCart) {
          if (product._id == checkObj._id) {
            product.quantity += 1;
            return false;
          }
        }
        return true;
      }
      if (this.app.shoppingCart == [] || checkShoppingCart(this.productSelected)) this.app.shoppingCart.push({_id: this.productSelected._id, quantity: this.productSelected.quantity});

      this.app.header.render();
      $(event.target).addClass("bg-danger").text('Tillagd').delay(1000).queue(function(next) {
        $(this).removeClass('bg-danger').text('Köp');
        next();
      });
    }
  }

}
