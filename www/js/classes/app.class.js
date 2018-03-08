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

    this.startPage = new Startpage(this);
    this.materiel = new Materiel(this);
    this.bocker = new Bocker(this);
    this.ingredienser = new Ingredient(this);
    this.omOss = new OmOss(this);

    this.popState = new PopStateHandler(this);
  }

}
