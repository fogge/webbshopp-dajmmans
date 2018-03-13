const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Materiel extends ModelAndRoutes {

  static get schema(){
    return {
      title: String,
      description: String,
      material: String,
      magicType: [String],
      imageLink: String,
      price: Number,
      vatRate: Number,
      soldAmount: Number,
      stockBalance: Number,
      artNumber: Number,
      keyword: [String]   
    }
  }

}
