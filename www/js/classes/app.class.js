class App extends REST {

  constructor() {
    super();
    this.start();
    this.shoppingCart = [];
  }

  async start() {
    // Initiate handling of SPA push/pop-state
    this.myIngredients = await Ingredient.find();

    this.all = new All;
    All.allProducts = await this.all.getResult({});

    //Rendering the header
    this.header = new Header(this);
    this.header.render('header');

    //Rendering the footer
    this.footer = new Footer(this);
    $('footer').empty();
    this.footer.render('footer');

    // Loading the cart
    this.cart = new Cart();
    this.cart.loadCart();

    this.startPage = new Startpage(this);
    this.materiel = new Materiel(this);
    this.ingredienser = new Ingredient(this);
    this.Book = new Book(this);
    this.order = new Order();
    this.logout = new Logout(this);
    this.popState = new PopStateHandler(this);
  }

}
