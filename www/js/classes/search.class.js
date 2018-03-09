class Search extends REST {
  constructor() {
    super();
    this.searchResult = [];
    this.getSearchResult();
  }

  async getSearchResult() {
    let query = Search.searchQuery;
    // Hardcoded search on ingredients collection with title
    let searchResultFromMongo = await Ingredient.request('ingredients', 'get', {title: Search.searchQuery});
    searchResultFromMongo.result.forEach( (product) => {
      this.searchResult.push(new ProductAvatar(product));
    })
    return this.render();
  }
}


