class Admin extends REST {
    constructor(app) {
      super();
      app = app;
      this.getOrders({});
      this.openDetails();
      this.changeOrderStatus();
      this.searchAdminOrders();
  
    }

    async getOrders(searchObj) {
      this.orders = await Order.find(searchObj);    
        
      for (const order of this.orders) {
        this.order = order;
        this.order.result.orderdate = this.order.result.orderdate.substring(0,10);
        this.render('.orderList',2);
        this.render(`#progress-${this.order.result._id}`, 3);
        this.orderStatus(this.order.result.status);
      }
    }

    openDetails(){
      $(document).on('click', '.admin-item', function( event ) {
        let state = $(event.target).attr('value');
        let detailId = $(event.target).attr('id').split('-')[1];
        state == 'Open'? (
          $(`#orderDetails-${detailId}`).attr('value', 'Close').text('Stänga detaljer').toggleClass('btn-dark'),
          $(`#item-${detailId}`).attr('value', 'Close') ):(
              $(`#orderDetails-${detailId}`).attr('value', 'Open').text('Öppna detaljer').toggleClass('btn-dark'),
              $(`#item-${detailId}`).attr('value', 'Open'));
      });
    }

    orderStatus(status){
      switch(status){
        case 'Mottagen': 
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
        case 'Levererad': 
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
        $(document).on('click', `#changeOrderStatusOption-${idToChange} button`, function( event ) {
         that.order.result._id = idToChange;
         let status = $(event.target).text();
         $(`#progress-${idToChange}`).empty();
         that.render(`#progress-${idToChange}`, 3);
         that.orderStatus(status);
         that.orderUpdate(idToChange, status);
         $(`#status-title-${idToChange}`).empty();
         $(`#status-title-${idToChange}`).text(status);
        });
      });

      
    }

    async orderUpdate(idToChange, status){
      this.orderToUpdate = this.orders.find( orderSelected => 
        orderSelected.result._id == idToChange );

      this.orderToUpdate.result.status = status;
      return await this.order.save(this.orderToUpdate);
        
    }
    
    searchAdminOrders () {
      let that = this;
      $(document).on('click', '#adminSearch', function (event) {
        event.preventDefault();
        let keyword = $('#adminKeyword').val();
        $('#adminKeyword').val('');
        that.searchEngineAdmin(keyword);
      });  
    }

    async searchEngineAdmin (keyword) {  
      this.searchResult = this.orders.find(searchResult =>
        searchResult.result.orderno == keyword
      );      
      this.order.result = this.searchResult.result;
      this.order.result.orderdate = this.order.result.orderdate.substring(0,10);
      $('.orderList').empty();
      $(`#progress-${this.searchResult.result._id}`);
      this.render('.orderList',2);
      this.render(`#progress-${this.searchResult.result._id}`, 3);
      this.orderStatus(this.searchResult.result.status);
      
    }
  }