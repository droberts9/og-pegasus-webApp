import _ from 'lodash';

class CategoriesController {

  constructor(apiService, $scope, $log, utils, categories) {
    'ngInject';
    this.api = apiService;
    this.$log = $log;
    this.assets = {};
    this.utils = utils;

    if (categories && categories.categories[0]) {
      this.categories = categories.categories[0].subcategories;
    } else {
      this.categories = [];
    }

    this.getCategory('bww');
    this.getCategory('bbc', 'big');
  }


  // Retrieve category playlist
  getCategory(categoryName, kind) {

    // Create an empty playlist
    this.assets[categoryName] = {playList: []}
    // Retrieve it
    this.api.getCategory(categoryName).then( (result) => {

      if (result && result.categories[0] && result.categories[0].assets) {
        // If is a big carousel, slice the first on the slide
        var slides = _.clone(result.categories[0].assets, true);
        if (kind == 'big') {
          this.assets[categoryName]['main'] = slides.shift();
        }
        this.assets[categoryName]['playList'] = this.utils.groupOf(slides, 2);
        this.assets[categoryName]['category'] = result.categories[0];
      }
    });
  }

}

export { CategoriesController }
