class UserpageItem extends REST {
  constructor(product, co) {
  	super();
    this.product = product;
    this.co = co;
    for (let value in product) {
      this[value] = product[value];
    }
    this.product.orderdate = this.product.orderdate.substring(0,10)
  }

}
