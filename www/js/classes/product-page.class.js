class ProductPage extends REST {
  constructor(product) {
    super();
    this.productSelected;
    this.productId;
    this.clickEvents();
    this.product = product;  
    console.log('product page');
      
  }

  clickEvents(){
    let that = this;
    
    $(document).on("click", '.product-title', function () {
      that.productId = $(this).attr('id');
      console.log(that.productId);
      
      that.getProduct(that.productId);
    });
    
  }
  async getProduct(productId){
    let products =  await this.product.productcategory.myProducts;
    this.productSelected =  await products.find( selectedProduct => selectedProduct._id === productId);
    await console.log(this.productSelected);
   
    //$('main').empty();
   // this.render('main');
  }
  
}
