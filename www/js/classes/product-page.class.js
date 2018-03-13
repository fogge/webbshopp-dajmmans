class ProductPage extends REST {
  constructor(product) {
    super();
    this.productSelected;
    this.productId;
    this.clickEvents();
    this.product = product;
  }

  clickEvents(){
    let that = this;
    $(document).on("click", '.product-title', function () {
      that.productId = $(this).attr('id');
      that.getProduct(that.productId);
    });

  }
  async getProduct(productId){

    let products = await this.product.productcategory.myProducts;
    this.productSelected = await products.find( selectedProduct => selectedProduct._id === productId);

    $('main').empty();
    this.render('main');
  }

}
