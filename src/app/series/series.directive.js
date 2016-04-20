class SeriesDirective {

  constructor() {
    'ngInject'
    this.templateUrl = 'app/series/series.directive.html';
    this.restrict = 'E';
    this.replace = true;
    this.scope = {
      items: '='
    };
  }

  static directiveFactory() {
    return new SeriesDirective();
  }

}

export { SeriesDirective }
