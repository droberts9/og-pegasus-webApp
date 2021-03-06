class CategoriesController {

  constructor(apiService, $scope, $log, $state, $window, metaService, featured, trending, recent, carousel) {
    'ngInject';
    this.api = apiService;
    this.$log = $log;
    this.$state = $state;
    this.assets = {};
    this.featured = [];
    this.trending = [];
    this.recent = [];
    this.carousel = [];
    this.metaService = metaService;

    if (featured) {
      this.featured = featured;
    }

    if (trending) {
      this.trending = trending;
    }

    if (recent) {
      this.recent = recent.assets;
    }

    if (carousel) {
      this.carousel = carousel;
    }

    //no issue had changedthis.getCategory('top-trending');


    if (angular.isDefined($window.googletag) && angular.isDefined($window.googletag.pubads)) {
      $window.googletag.pubads().setTargeting('kw', "homepage?");
    }

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
        this.assets[categoryName]['playList'] = category.assets;
        this.assets[categoryName]['category'] = category;
      }
    });
  }

  play(options) {
    if (options.episode.klass() == 'AssetModel') {
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
