class MetaService {

  constructor($log) {
    'ngInject';

    this.$log = $log;
    this._keywords = '';
  }

  set keywords(value) {
    this._keywords = value;
  }

  get keywords() {
    return this._keywords;
  }

}

export { MetaService }