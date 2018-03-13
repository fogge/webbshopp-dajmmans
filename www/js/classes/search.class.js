class Search extends REST {
  constructor(query, app) {
    super();
    this.app = app;
    this.query = query;
    this.searchResult = [];
    this.getSearchResult();
    this.setupHandler();
  }

  async getSearchResult() {
    // Hardcoded search on ingredients collection with title
    // let searchResultFromMongo = await Ingredient.request('ingredients', 'GET', `title[$regex]=${Search.searchQuery}`);
    const mongoCollection = String($('#search-in-category').val());
    const searchObj = {title: {$regex: this.query, $options: 'i'}};
    let mongoResult;
    if(mongoCollection === 'Ingredient') mongoResult = await Ingredient.find(searchObj);
    if(mongoCollection === 'Materiel') mongoResult = await Materiel.find(searchObj);
    if(mongoCollection === 'Book') mongoResult = await Book.find(searchObj);
    if(mongoCollection === 'All') mongoResult = await All.find(searchObj);
    
    try {
      mongoResult.forEach( (product) => {
        this.searchResult.push(new ProductAvatar(product.result, this.app));
      });
    } catch(e){
      console.error('Problem med collections \n', e);
    }

    return await this.render();
  }
  
  sortPriceLow() {
    this.searchResult.sort((a,b) => {
     return a.price - b.price;
    });
  }

  sortPriceHigh() {
    this.searchResult.sort((a,b) => {
     return b.price - a.price;
    });
  }

  sortNameLow() {
    this.searchResult.sort((a,b) => {
     if (a.title > b.title) {
       return 1;
     }
     if (a.title < b.title) {
       return -1;
     }
     return 0;
    });
  }

  sortNameHigh() {
    this.searchResult.sort((a,b) => {
     if (a.title < b.title) {
       return 1;
     }
     if (a.title > b.title) {
       return -1;
     }
     return 0;
    });
  }

  sortSold(){
    this.searchResult.sort((a,b) => {
      if (a.soldAmount < b.soldAmount) {
        return 1;
      }
      if (a.soldAmount > b.soldAmount) {
        return -1;
      }
      return 0;
    });
  }

  setupHandler() {
    $(document).on('click', '#sortPriceLow, #sortPriceHigh, #sortNameLow, #sortNameHigh, #sortSold', (e) => {
      e.preventDefault();
      let method = $(e.target).attr('id');
      this[method]();
      this.render();
    });
  }
}
