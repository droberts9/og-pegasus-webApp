
class CategoryController {

  constructor(apiService, $scope, $log, category) {
    'ngInject';
    this.api = apiService;
    this.scope = $scope;
    this.$log = $log;

    if ( category && category.categories[0]) {
      this.category = category.categories[0];
      this.current = this.category.assets[0];
    } else {
      this.category = undefined;
      this.current = undefined;
    }

  }

}

export { CategoryController }
