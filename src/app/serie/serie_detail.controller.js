class SerieDetailController {

  constructor($log, $timeout, $document, $state, playerService, utils, episode, season, discovery) {
    'ngInject';

    this.$log      = $log;
    this.$state    = $state;
    this.$timeout  = $timeout;
    this.episode   = episode;
    this.season    = season;
    this.season_episodes   = utils.groupOf(season.episodes, 2);
    this.discovery = utils.groupOf(discovery, 2);
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
