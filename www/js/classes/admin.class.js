class Admin extends REST {
    constructor(app) {
      super();
      app = app;
      this.getOrders({});
      this.clickEvents();
      this.changeOrderStatus();
    }

    async getOrders(searchObj) {
      let orders = await Order.find(searchObj);    
      console.log(orders);
        
      for (const order of orders) {
        this.order = order;
        this.order.result.orderdate = this.order.result.orderdate.substring(0,10);
        this.render('.orderList',2);
        this.render(`#progress-${this.order.result._id}`, 3);
        this.orderStatus(this.order.result.status);
      }
    }

    clickEvents(){
      $(document).on('click', '#orderDetails', function( event ) {
        let state = $(event.target).attr('value');
        state == 'Open'? $(event.target).attr('value', 'Close').text('Stänga detaljer') : $(event.target).attr('value', 'Open').text('Öppna detaljer')
      });
    }

    orderStatus(status){
      switch(status){
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

    changeOrderStatus(){
      let that = this;
      $(document).on('click', '.changeOrderStatus', function( event ) {
        let idToChange = $(event.target).attr('id').split('-')[1];
        $(document).on('click', '#changeOrderStatusOption button', function( event ) {
         let status = $(event.target).text();
         $(`#progress-${idToChange}`).empty();
         that.render(`#progress-${idToChange}`, 3);
         that.orderStatus(status);
        });
      });

      
    }

    orderUpdate(idToChange, status){
       console.log(this.order.result);
        
    }
  }