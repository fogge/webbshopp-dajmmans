
//Fix here for our JSON
const ingredientJson = require('./json/ingredients.json');



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()) // needed to post json
app.use(express.static('www'));

// Please note that "a Book" here is not really a book
// but a Mongoose model + setting up routes
const Ingredient = require('./classes/ingredient.class');
let ingredient = new Ingredient(app);

ingredient.setupImportRoute(ingredientJson);



app.listen(3000,()=>{
  console.log("Listening on port 3000!");
});
