class ProductCategory extends REST {
  constructor(app, category){
    super();
    this.app = app;
    this.myProducts = [];
    this.getRightCategory(category);
    this.category = category;
  }

  async getRightCategory(category){
    let collection = await category.find({});
    
    try {
      collection.forEach( (product) => {
        this.myProducts.push(new ProductAvatar(product.result, this.app));
      });
    } catch(e){
      console.error('Problem med collections \n', e);
    }
    
    $('main').empty();
    this.render('main', '3');
    
    }

}
