class UserpageItem extends REST {
  constructor(product, app, co) {
  	super();
    this.product = product;
  	app = app;
    this.co = co;
    for (let value in product) {
      this[value] = product[value];
    }
    this.product.orderdate = this.product.orderdate.substring(0,10)
  }

}