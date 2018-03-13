

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

let ingredient = new Ingredient(app);
let book = new Book(app);
let materiel = new Materiel(app);

ingredient.setupImportRoute(ingredientJson);
book.setupImportRoute(booksJson);
materiel.setupImportRoute(materielJson);

app.post('/send-email', function (req, res) {
  nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports 
          auth: {
              user: account.user, // generated ethereal user 
              pass: account.pass // generated ethereal password 
          }
      });
      console.log('transporter',transporter);
      // setup email data with unicode symbols 
      let mailOptions = {
          from: '"Dajmans webbshop 👻"', // sender address 
          to: req.body.to, // list of receivers 
          subject: req.body.subject, // Subject line 
          text: '', // plain text body 
          html: '<h1>Du har beställt följande</h1>' // html body 
      };

      // send mail with defined transport object 
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account 
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com> 
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou... 
      });
  });
});

app.get(/^[^\.]*$/, (req, res) => {
 res.sendFile(__dirname + '/www/index.html');
});




app.listen(3000,()=>{
  console.log("Listening on port 3000!");
});
