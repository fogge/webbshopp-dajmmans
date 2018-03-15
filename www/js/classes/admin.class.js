class Admin extends REST {
    constructor(app) {
      super();
      this.app = app;
      this.getOrders({});
    }

    async getOrders(searchObj) {
      let orders = await Order.find(searchObj);      
      for (const order of orders) {
        this.order = order;
        this.order.result.orderdate = this.order.result.orderdate.substring(0,10);
        this.render('.orderList',2);
      }
    }
  }