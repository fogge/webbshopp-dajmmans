class ProductAvatar extends REST {
  constructor(product) {
    super();
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
}