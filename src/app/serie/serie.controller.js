class SerieController {

  constructor($document, apiService, playerService, utils,  $scope, $log, $state, serie) {
    'ngInject';

    this.api = apiService;
    this.$scope = $scope;
    this.$log = $log;
    this.$state = $state;
    this.serie = serie;
    //this.season    = seasons;
    this.serie_episodes   = utils.groupOf(serie.seasons, 2);
    //this.discovery = utils.groupOf(discovery, 2);
    this.player    = playerService;

    angular.element($document).on('update-video-data', ()=> this.updateCurrentVideo() );

  }

  updateCurrentVideo() {
    let current = this.player.currentVideo();
    if (angular.isUndefined(current)) {
      return;
    }
    // $timeout by default trigger an $apply cycle.. to refresh the front
    this.$timeout(()=> {
      this.episode = current;
    }, 0);
  }

  /*slplay(item) {
    this.$log.warn("SerieController#slplay:", {serie: item.serie_slug, season: item.season_slug, show: item.slug});
    this.$state.go('home.serie_show', {serie: item.serie_slug, season: item.season_slug, show: item.slug});
  }*/

  play(options) {
    if (options.followLink == true) {
      this.$state.go('home.trending', {slug: options.episode.slug});      
    } else {
      // Only the episodes can change the url
      // Trending videos don't have an url
      if (angular.isDefined(options.episode.serie_slug)) {
        // update url on browser without reload page
        this.$state.go(
            'home.serie_show',
            {serie: options.episode.serie_slug, season: options.episode.season_slug, show: options.episode.slug},
            {location: true, inherit: true, relative: this.$state.$current, notify: false}
            );
            this.player.play(options.episode);
        angular.element('body').scrollTop(0);
      }
    }
  }

}

export { SerieController };
