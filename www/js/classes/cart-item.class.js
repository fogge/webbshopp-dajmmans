class CartItem extends REST {
  constructor(product) {
    super()
    for (let value in product) {
      this[value] = product[value]
    }
    console.log(this);
  }
}
