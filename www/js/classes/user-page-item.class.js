class UserpageItem extends REST {
  constructor(product, co) {
  	super();
    this.co = co;
    this.productName = [];
    for (let value in product) {
      this[value] = product[value];
    }
    this.orderdate = this.orderdate.substring(0,10);
    this.findProducts();
  }

  async findProducts() {
    let all = new All();

    this.products.forEach( async (product) => {

      let skatt = await all.getResult({_id: product._id});
      console.log('skatt title', skatt[0].title);
      await this.productName.push(skatt[0].title);

    });
    console.log(this.productName)

    // Teknisk skuld
    setTimeout(() => {
      $('main').empty();
      app.user.render('main', 1);
    }, 100);
    
  }

}
