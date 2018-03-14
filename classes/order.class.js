const ModelAndRoutes = require('./model-and-routes.class'); 
 
module.exports = class Order extends ModelAndRoutes { 
 
  static get schema(){ 
    return { 
      orderno: Number, 
      products: [String], 
      status: String, 
      orderdate: { type: Date, default: Date.now },
      customerid: String, 
      price: Number, 
      vat: Number 
    } 
  } 
 
}