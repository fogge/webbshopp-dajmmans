
//Fix here for our JSON
const ingredientJson = require('./json/ingredients.json');
const booksJson = require('./json/books.json');
const materielJson = require('./json/matriel.json');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()) // needed to post json
app.use(express.static('www'));

// Please note that "a Book" here is not really a book
// but a Mongoose model + setting up routes
const Ingredient = require('./classes/ingredient.class');
const Book = require('./classes/book.class');
const Materiel = require('./classes/materiel.class');

let ingredient = new Ingredient(app);
let book = new Book(app);
let materiel = new Materiel(app);

ingredient.setupImportRoute(ingredientJson);
book.setupImportRoute(booksJson);
materiel.setupImportRoute(materielJson);



app.listen(3000,()=>{
  console.log("Listening on port 3000!");
});
