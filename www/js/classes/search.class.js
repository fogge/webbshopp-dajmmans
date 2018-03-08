class Search extends REST {
  constructor() {
    super();
    this.searchResult = this.getSearchResult();
  }

  getSearchResult() {
    let searchResultFromMongo = [{title: "Blodkiss", price: 129, stock: 23}, {title: "Spermakiss", price: 349, stock: 3}, {title: "Kiss från oskuld", price: 179, stock: 0}];
    // Get import/searchresults from database, now only an hardcoded object return
    let array = [];
    searchResultFromMongo.forEach( (product) => {
      array.push(new ProductAvatar(product));
    })
    return array;
  }
}