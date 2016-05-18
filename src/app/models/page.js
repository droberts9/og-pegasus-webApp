class PageModel {

  constructor(data) {
    this.content    = '';
    this.js_code    = '';
    this.menu_title = '';
    this.page_title = '';
    this.slug       = '';

    this.initValues(data);
  }

  initValues(data) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        this[prop] = data[prop];
      }
    }
  }

  klass() {
    return 'PageModel';
  }


}

export { PageModel }
