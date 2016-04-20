
class CategoryController {

  constructor(apiService, $scope, $log, category) {
    'ngInject';
    this.api = apiService;
    this.scope = $scope;
    this.$log = $log;

    this.category = category.categories[0];

  }

}

export { CategoryController }
