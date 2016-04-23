
class CategoriesController {

  constructor(apiService, $scope, $log) {
    'ngInject';
    this.api = apiService;
    this.scope = $scope;
    this.$log = $log;

    this.api.getCategory('categories').then( (result) => {this.$log.info(result); this.cats = result.categories[0].subcategories} );
  }

}

export { CategoriesController }
