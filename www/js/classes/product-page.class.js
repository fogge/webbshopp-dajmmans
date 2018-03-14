class ProductPage extends REST {
  constructor(app) {
    super();
    this.app = app;
  }

  
  async getProduct(productId){
    
    this.productSelected = All.allProducts.find( selectedProduct => selectedProduct.result._id === productId);
    this.productSelected = this.productSelected.result;
    
  }
  click() {
    if ($(event.target).hasClass('addToCart')) {
      this.app.shoppingCart.push(new CartItem(this));
      this.app.header.render();
    }

  } 
  
}
