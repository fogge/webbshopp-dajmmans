class Admin extends REST {
    constructor(app) {
      super();
      this.app = app;
      this.getOrders({});
      this.clickEvents();
    }

    async getOrders(searchObj) {
      let orders = await Order.find(searchObj);      
      for (const order of orders) {
        this.order = order;
        this.order.result.orderdate = this.order.result.orderdate.substring(0,10);
        this.render('.orderList',2);
        this.orderStatus();
      }
    }

    clickEvents(){
      $(document).on('click', '#orderDetails', function( event ) {
        let state = $(event.target).attr('value');
        state == 'Open'? $(event.target).attr('value', 'Close').text('Stänga detaljer') : $(event.target).attr('value', 'Open').text('Öppna detaljer')
      });
    }

    orderStatus(){
      switch(this.order.result.status){
        case 'Beordrade': 
          $(`#orderStatus-1-${this.order.result._id}`).addClass('d-block');
          break;
        case 'Behandlad': 
          $(`#orderStatus-1-${this.order.result._id}`).addClass('d-block');
          $(`#orderStatus-2-${this.order.result._id}`).addClass('d-block');
          break;
        case 'Skickad': 
          $(`#orderStatus-1-${this.order.result._id}`).addClass('d-block');
          $(`#orderStatus-2-${this.order.result._id}`).addClass('d-block');
          $(`#orderStatus-3-${this.order.result._id}`).addClass('d-block');
          break;
        case 'Mottagen': 
          $(`#orderStatus-1-${this.order.result._id}`).addClass('d-block');
          $(`#orderStatus-2-${this.order.result._id}`).addClass('d-block');
          $(`#orderStatus-3-${this.order.result._id}`).addClass('d-block');
          $(`#orderStatus-4-${this.order.result._id}`).addClass('d-block');
          break;
      }
    }
  }