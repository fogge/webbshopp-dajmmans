const app = new App();

function request(entity, reqMethod, query, body, callback){

  let reqObj = {
    url: `/${entity}/${query}`, // entity for example "books"
    method: reqMethod, // POST, GET, PUT, DELETE
    dataType: 'json', // I except JSON back from the server
    data: JSON.stringify(body), // JSON to send to server
    processData: false, // do not try to convert the data...
    // set the content type the server expects
    // to tell it we are sending json
    contentType: "application/json; charset=utf-8",
    // the callback function to call after recieving data
    // from the server
    success: callback
  };

  if(reqMethod != "POST" && reqMethod != "PUT"){
    delete reqObj.data;
  }

  $.ajax(reqObj);


}


start();
