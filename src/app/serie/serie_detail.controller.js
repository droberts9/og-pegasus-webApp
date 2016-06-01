class SerieDetailController {

  constructor($log, $timeout, $document, $state, $window, playerService, metaService, episode, season, discovery, socialService) {
    'ngInject';

    this.$log        = $log;
    this.$state      = $state;
    this.$timeout    = $timeout;
    this.episode     = episode;
    this.season      = season;
    this.metaService = metaService;
    this.discovery   = discovery;
    this.player      = playerService;
    this.social      = socialService;

    angular.element($document).on('update-video-data', ()=> this.updateCurrentVideo() );

    this.metaService.keywords = this.episode.metadata.AdTags;

    if (angular.isDefined($window.googletag)) {
      $window.googletag.pubads().setTargeting('kw', this.episode.metadata.AdTags);
    }

  }

  updateCurrentVideo() {
    let current = this.player.currentVideo();
    if (angular.isUndefined(current)) {
      return;
    }

    // $timeout by default trigger an $apply cycle.. to refresh the front
    this.$timeout(()=> {
      this.episode = current;
      this.metaService.keywords = this.episode.metadata.AdTags;
    }, 0);
  }

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

export { SerieDetailController };
