class CartItem extends REST {
  constructor(product) {
    super();
    for (let value in product) {
      // This if statement is for fixing a bug in Base, else This gets wrong template
      if (value !== 'template') this[value] = product[value];
    }
  }

  getVatPerItem(){
    if (this.vatRate == 6) {
      return Math.round((this.price * 0.0566) * 10) / 10;
    } else if (this.vatRate == 12) {
      return Math.round((this.price * 0.1071) * 10) / 10;
    } else {
      return Math.round((this.price * 0.2) * 10) / 10;
    }
  }
}
