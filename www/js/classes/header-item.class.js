class HeaderItem extends REST {

  constructor(name, url, app){
    super();
    this.app = app;
    this.name = name;
    this.url = url;
    this.active = false;
  }

}
