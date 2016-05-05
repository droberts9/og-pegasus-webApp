import _ from 'lodash';

class CategoriesController {

  constructor(apiService, $scope, $log, utils, series, featured) {
    'ngInject';
    this.api = apiService;
    this.$log = $log;
    this.assets = {};
    this.utils = utils;
    this.series = [];
    this.featured = [];

    if (featured) {
      this.featured = featured;
    }

    if (series) {
      this.series = series;
    }

    this.getCategory('featured');

  }


  // Retrieve category playlist
  getCategory(categoryName, kind) {

    // Create an empty playlist
    this.assets[categoryName] = {playList: []}
    // Retrieve it
    this.api.getCategory(categoryName).then( (category) => {

      if (category && category.assets.length > 0) {
        // If is a big carousel, slice the first on the slide
        var slides = _.clone(category.assets, true);
        if (kind == 'big') {
          this.assets[categoryName]['main'] = slides.shift();
        }
        this.assets[categoryName]['playList'] = this.utils.groupOf(slides, 2);
        this.assets[categoryName]['category'] = category;
      }
    });
  }

}

export { CategoriesController }
