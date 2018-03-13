class All extends REST {

  constructor(searchObj) {
    super();
    this.mongoResult = [];
    this.getResult(searchObj);
   
  }
  
  async getResult(searchObj) {
    let ingredients = await Ingredient.find(searchObj);
    let materiels = await Materiel.find(searchObj);
    let books = await Book.find(searchObj);
    this.mongoResult.push(...ingredients, ...materiels, ...books);
  }
}