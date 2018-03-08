class App extends REST {

  constructor() {
    super();
    this.start();

  }

  async start() {
    // Initiate handling of SPA push/pop-state
    this.myIngredients = await Ingredient.find();
    console.log(this.myIngredients);

    this.header = new Header(this);
    $('header').empty();
    this.header.render('header');

    this.footer = new Footer(this);
    $('footer').empty();
    this.footer.render('footer');


    //new PopStateHandler(this);
  }

}
