class Search extends REST {
  constructor(query) {
    super();
    this.query = query;
    this.searchResult = [];
    this.getSearchResult();
  }

  async getSearchResult() {
    // Hardcoded search on ingredients collection with title
    // let searchResultFromMongo = await Ingredient.request('ingredients', 'GET', `title[$regex]=${Search.searchQuery}`);
    let searchResultFromMongo = await Ingredient.find({title: {$regex: this.query, $options: 'i'}});
    await console.log('searchResultFromMongo', searchResultFromMongo);
    searchResultFromMongo.forEach( (product) => {
      this.searchResult.push(new ProductAvatar(product.result));
    })
    return await this.render();
  }
}
