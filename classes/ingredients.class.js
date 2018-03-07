const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Ingredients extends ModelAndRoutes {

  static get schema(){
    return {
    	title: String,
    	magicType: [String],
    	imageLink: String,
    	price: Number,
    	vatRate: Number,
    	country: String,
    	description: String,
    	stockBalance: Number,
    	artNumber: Number,
    	keyword: [String]
    }
  }

}
