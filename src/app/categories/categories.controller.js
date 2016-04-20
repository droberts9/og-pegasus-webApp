
class CategoriesController {

  constructor(apiService, $scope, $log) {
    'ngInject';
    this.api = apiService;
    this.scope = $scope;
    this.$log = $log;

    this.api.getCategories().then( result => this.cats = result.categories );
  }

}

export { CategoriesController }
