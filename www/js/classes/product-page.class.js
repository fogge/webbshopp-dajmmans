class ProductPage extends REST {
  constructor(app) {
    super();
    this.app = app;
    //this.clickEvents();
  }

  
  async getProduct(productId){
    
    this.productSelected = All.allProducts.find( selectedProduct => selectedProduct.result._id === productId);
    this.productSelected = this.productSelected.result;
    
  }
  
}
