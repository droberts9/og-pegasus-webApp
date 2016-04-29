import _ from 'lodash';

class CategoriesController {

  constructor(apiService, $scope, $log, utils, categories, featured) {
    'ngInject';
    this.api = apiService;
    this.$log = $log;
    this.assets = {};
    this.utils = utils;
    this.categories = [];
    this.featured = [];

    if (featured) {
      this.featured = featured.assets;
    }

    if (categories) {
      this.categories = categories.subcategories;
    }

    this.getCategory('aqua-lung-scuba-2015');
    this.getCategory('costa-rica', 'big');
  }


  // Retrieve category playlist
  getCategory(categoryName, kind) {

    // Create an empty playlist
    this.assets[categoryName] = {playList: []}
    // Retrieve it
    this.api.getCategory(categoryName).then( (result) => {

      if (result && result.assets) {
        // If is a big carousel, slice the first on the slide
        var slides = _.clone(result.assets, true);
        if (kind == 'big') {
          this.assets[categoryName]['main'] = slides.shift();
        }
        this.assets[categoryName]['playList'] = this.utils.groupOf(slides, 2);
        this.assets[categoryName]['category'] = result;
      }
    });
  }

}

export { CategoriesController }
