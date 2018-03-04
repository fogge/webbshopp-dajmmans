const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Materiel extends ModelAndRoutes {

  static get schema(){
    return {
      name: String,
      description: String
    }
  }

}
