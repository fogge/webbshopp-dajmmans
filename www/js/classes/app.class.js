class App extends REST {

  constructor() {
    super();
    this.start();
  }

  async start() {
    // Initiate handling of SPA push/pop-state
    this.myIngredients = await Ingredient.find();

    //Rendering the header
    this.header = new Header(this);
    $('header').empty();
    this.header.render('header');

    //Rendering the footer

    this.startPage = new Startpage(this);
    this.materiel = new Materiel(this);
    this.ingredienser = new Ingredient(this);
    this.bocker = new Bocker(this);
    this.about = new About(this);
    this.account = new Account(this);

    // Footer
    this.footer = new Footer(this);
    $('footer').empty();
    this.footer.render('footer');

    this.popState = new PopStateHandler(this);
  }

}
