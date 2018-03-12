class ProductCategory extends REST {
  constructor(app){
    super();
    this.app = app;
    this.myProducts = [];
    this.checkCategory();
  }

  checkCategory(){
    let url = location.pathname;
    if (url == '/ingredienser') {this.getRightCategory(Ingredient);}
    else if (url == '/bocker') {this.getRightCategory(Book);}
    else if (url == '/materiel') {this.getRightCategory(Materiel);}
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

    this.myProducts.render();
  }

}
