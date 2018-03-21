const ModelAndRoutes = require('./model-and-routes.class'); 
 
module.exports = class Order extends ModelAndRoutes { 
 
  static get schema(){ 
    return {  
      products: [{}], 
      status: {type: String, default: "Mottagen"}, 
      orderdate: { type: Date, default: Date.now },
      customerid: String, 
      price: Number, 
      vat: Number,
      adress: {}
    } 
  } 
 
}