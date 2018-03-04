const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Book extends ModelAndRoutes {

  static get schema(){
    return {
      author: String,
      country: String,
      imageLink: String,
      language: String,
      link: String,
      pages: Number,
      title: String,
      year: Number
    }
  }

}