class CartItem extends REST {
  constructor(product) {
    super();
    for (let value in product) {
      // This if statement is for fixing a bug in Base, else This gets wrong template
      if (value !== 'template') this[value] = product[value];
    }
  }
}
