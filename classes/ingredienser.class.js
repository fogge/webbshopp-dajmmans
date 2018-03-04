const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Ingredienser extends ModelAndRoutes {

  static get schema(){
    return {
      name: String,
      description: String
    }
  }

}
