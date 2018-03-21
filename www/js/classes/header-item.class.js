class HeaderItem extends REST {

  constructor(name, url, app){
    super();
    app = app;
    this.name = name;
    this.url = url;
    this.active = false;
  }

}
