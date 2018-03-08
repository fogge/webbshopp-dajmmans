class Search extends REST {
  constructor() {
    super();
    this.searchResult = [];
    this.getSearchResult();
  }

  async getSearchResult() {
    let searchResultFromMongo = await Ingredient.request('ingredients', 'get', {title: Search.searchQuery});
    // Get import/searchresults from database, now only an hardcoded object return
    let array = [];
    searchResultFromMongo.result.forEach( (product) => {
      this.searchResult.push(new ProductAvatar(product));
    })
    return this.render();
  }
}


