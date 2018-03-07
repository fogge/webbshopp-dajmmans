
//OUR JSON
const ingredientsJson = require('./json/ingredients.json');
const mongoose = require('mongoose');
//----------------------------

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//OUR collections!
mongoose.connect('mongodb://localhost/ingredients');
//--------------------------

const db = mongoose.connection;
db.on('error', (e)=>{ console.error(e); });
db.once('open', ()=>{ console.info('db connected');});
const Ingredients = require('./classes/ingredients.class');
let ingredientsModel = new Ingredients(app).myModel;


// Empty collections
ingredientsModel.remove({}, ()=> {
  start();
});

function start(){

  // Author mem - to avoid duplicates
  let authorMem = {};


  // Import books and store in db with their connection to an author
  for (let book of booksJson){

    let temp = book;
    temp.author = authorMem[temp.author]._id;

    let b = new bookModel(temp);

    b.save(() => {
      // Look up the author again and add the book id
      authorModel.find({_id: temp.author}, (err,a) => {
        a = a[0];
        a.books.push(b);
        a.save();
      });
    });


  }

}
