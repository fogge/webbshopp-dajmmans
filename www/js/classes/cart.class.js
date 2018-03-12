class Cart extends REST {
  constructor() {
    super()
    this.cartItems = [new CartItem({title : 'Blodkiss', price : 199, artNumber : 123215, image : '/img/blod-kiss.jpg', description : 'Funko POP! Games: Kingdom Hearts: Organization 13 Mickey (Exclusive)'})];
  }
}
