class ProductAvatar extends REST {
  constructor(product, app) {
    super();
    this.app = app;
    this.quantity = 1;
    for (let value in product) {
      this[value] = product[value];
    }
    //this.materiel;
    this.getMaterielData();
  }

  async getMaterielData() {
    for (this.materiel of app.myMateriel) {
      this.render('.category-item');
    }
  }

  click() {
    if ($(event.target).hasClass('addToCart')) {
      console.log({_id: this._id, quantity: this.quantity});
      this.app.shoppingCart.push(new CartItem({_id: this._id, quantity: this.quantity}));
      this.app.header.render();
      $(event.target).addClass("bg-success").text('Tillagd').delay(1000).queue(function(next) {
        $(this).removeClass('bg-success').text('Köp');
        next();
      });
    }  
  }
}