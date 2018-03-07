class App extends REST {

  constructor() {
    super();
    $.ajax({
      url: '/ingredients',
      success: (data) => {
        console.log("Reset of database", data);
        // Now run our tests
        this.myIngredients = data;
        this.start();
      }
    });

  }

  start() {
    // Initiate handling of SPA push/pop-state
console.log(this.myIngredients);
  //  new PopStateHandler(this);
  }

}
