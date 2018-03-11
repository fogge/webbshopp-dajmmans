class ProductPage extends REST {
  constructor() {
    super();
    this.productSelected;
    this.productId;
    this.clickEvents();
    //this.getProduct();
  }

  clickEvents(){
    let that = this;
    $(document).on("click", '.product-title', function () {
      this.productId = $(this).attr('id');
      that.getProduct(this.productId);
    });
    
  }
  async getProduct(productId){
    this.productSelected = await Materiel.find({_id: productId});
    this.render('main');
  }
  
}
