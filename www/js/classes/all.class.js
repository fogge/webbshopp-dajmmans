class All extends REST {

  constructor(){
    super();
  }

  async getResult(searchObj) {
    let ingredients = await Ingredient.find(searchObj);
    let materiels = await Materiel.find(searchObj);
    let books = await Book.find(searchObj);
    
    return [...ingredients, ...materiels, ...books];
  }
}
