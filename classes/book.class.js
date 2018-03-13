const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Book extends ModelAndRoutes {

  static get schema(){
    return {
      title: String,
      author: String,
      description: String,
      pages: Number,
      language: String,
      magicType: [String],
      imageLink: String,
      price: Number,
      vatRate: Number,
      stockBalance: Number,
      artNumber: Number,
      keyword: [String]
    }
  }

}