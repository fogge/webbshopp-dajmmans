const ModelAndRoutes = require('./model-and-routes.class');

module.exports = class Order extends ModelAndRoutes {

  static get schema(){
    return {
      orderno: Number,
      products: [String],
      status: String,
      orderdate: Date,
      customerid: String,
      shippingdate: Date,
      price: Number,
      vat: Number
    }
  }

}