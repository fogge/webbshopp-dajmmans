

//Fix here for our JSON
const ingredientJson = require('./json/ingredients.json');
const booksJson = require('./json/books.json');
const materielJson = require('./json/matriel.json');

const path = require('path');
const nodemailer = require('nodemailer');
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
const mailer = require('/classes/sendmail.class')

let ingredient = new Ingredient(app);
let book = new Book(app);
let materiel = new Materiel(app);

ingredient.setupImportRoute(ingredientJson);
book.setupImportRoute(booksJson);
materiel.setupImportRoute(materielJson);

app.post('/send-email', mailer);

app.get(/^[^\.]*$/, (req, res) => {
 res.sendFile(__dirname + '/www/index.html');
});




app.listen(3000,()=>{
  console.log("Listening on port 3000!");
});
