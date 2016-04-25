
class CategoriesController {

  constructor(apiService, $scope, $log, utils, categories) {
    'ngInject';
    this.api = apiService;
    this.scope = $scope;
    this.$log = $log;
    this.assets = { bww: [] };
    if (categories && categories.categories[0]) {
      this.categories = categories.categories[0].subcategories;
    } else {
      this.categories = [];
    }

    this.api.getCategory('bww').then( (result) => {
      if (result && result.categories[0] && result.categories[0].assets) {
        this.assets['bww'] = utils.groupOf(result.categories[0].assets, 2);
      }
    });
  }

}

export { CategoriesController }
