class Search extends REST {
  constructor() {
    super();
    this.searchResult = [];
    this.getSearchResult();
  }

  async getSearchResult() {
    let query = Search.searchQuery;
    // Hardcoded search on ingredients collection with title
    // let searchResultFromMongo = await Ingredient.request('ingredients', 'GET', `title[$regex]=${Search.searchQuery}`);
    let searchResultFromMongo = await Ingredient.find('title=Blodkiss');
    await console.log('searchResultFromMongo', searchResultFromMongo);
    // searchResultFromMongo.result.forEach( (product) => {
    //   this.searchResult.push(new ProductAvatar(product));
    // })
    return await this.render();
  }
}


