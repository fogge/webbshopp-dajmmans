class App extends REST {

  constructor() {

  }

  start() {
    $.ajax({
      url: '/import/books',
      success: (data) => {
        console.log("Reset of database", data);
        // Now run our tests
        test();
      }
    });
    // Initiate handling of SPA push/pop-state
    new PopStateHandler(this);
  }

}
