class CategoryDirective {

  constructor() {
    'ngInject'
    this.templateUrl = 'app/categories/categories.directive.html';
    this.restrict = 'E';
    this.replace = true;
    this.scope = {
      items: '='
    };
  }

  static directiveFactory() {
    return new CategoryDirective();
  }

}


export { CategoryDirective }
