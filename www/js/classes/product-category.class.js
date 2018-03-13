class ProductCategory extends REST {
  constructor(app, category){
    super();
    this.app = app;
    this.myProducts = [];
    this.getRightCategory(category);
    this.category = category;
    this.setupHandler();
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

    setupHandler() {
      $(document).on('click', '#sortPriceLow, #sortPriceHigh, #sortNameLow, #sortNameHigh', (e) => {
        e.preventDefault();
        let method = $(e.target).attr('id');
        this[method](this.myProducts);
        $('main').empty();
        this.render('main', '3');
      });
    }

}
