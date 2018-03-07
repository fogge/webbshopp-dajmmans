class App extends REST {

  constructor() {
    super();
    this.start();

  }

  async start() {
    // Initiate handling of SPA push/pop-state
    this.myIngredients = await Ingredient.find();
    console.log(this.myIngredients);
  //  new PopStateHandler(this);
  }

}
