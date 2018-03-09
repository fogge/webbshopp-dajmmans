class Startpage extends REST {
  constructor() {
    super();
  	this.searchResult = [];
    this.getSearchResult();
  }

  async getSearchResult() {

    // Hardcoded search on ingredients collection with title
    let searchResultFromMongo = await Ingredient.request('ingredients', 'get', {});
    searchResultFromMongo.result.forEach( (product) => {
      this.searchResult.push(new ProductAvatar(product));
    })
    return this.render();
  }
}
