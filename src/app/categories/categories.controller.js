class CategoriesController {

  constructor(apiService, $scope, $log, $state, utils, featured, trending, recent, carousel) {
    'ngInject';
    this.api = apiService;
    this.$log = $log;
    this.$state = $state;
    this.assets = {};
    this.utils = utils;
    this.featured = [];
    this.trending = [];
    this.recent = [];
    this.carousel = [];

    if (featured) {
      this.featured = featured;
    }

    if (trending) {
      this.trending = this.utils.groupOf(trending, 2);
    }

    if (recent) {
      this.recent = this.utils.groupOf(recent.assets, 2);
    }

    if (carousel) {
      this.carousel = carousel;
    }

    //no issue had changedthis.getCategory('top-trending');

  }


  // Retrieve category playlist
  getCategory(categoryName, kind) {

    // Create an empty playlist
    this.assets[categoryName] = {playList: []}
    // Retrieve it
    this.api.getCategory(categoryName).then( (category) => {
      if (category && category.assets.length > 0) {
        // If is a big carousel, slice the first on the slide
        if (kind == 'big') {
          this.assets[categoryName]['main'] = category.assets.shift();
        }
        this.assets[categoryName]['playList'] = this.utils.groupOf(category.assets, 2);
        this.assets[categoryName]['category'] = category;
      }
    });
  }

  play(options) {
    this.$log.warn('options', options);
    if (options.episode.constructor.name == 'AssetModel') {
      this.$state.go(
        'home.trending',
        {slug: options.episode.slug}
      );
    } else {
      this.$state.go(
        'home.serie_show',
        {serie: options.episode.serie_slug, season: options.episode.season_slug, show: options.episode.slug}
      )
    }
  }

}

export { CategoriesController }
