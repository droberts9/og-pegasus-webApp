class SerieController {

  constructor($document, $timeout, apiService, playerService, utils,  $scope, $log, $state, serie) {
    'ngInject';

    this.api = apiService;
    this.$scope = $scope;
    this.$log = $log;
    this.$state = $state;
    this.$timeout = $timeout;
    this.serie = serie;
    this.player = playerService;
    this.serie_footages = utils.groupOf(serie.footages, 2);

    serie.seasons.forEach(function(season) {
      season.episodes = utils.groupOf(season.episodes, 2);
    }, this);



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
      if (angular.isDefined(options.episode.serie_slug)) {
        // update url on browser without reload page
        this.$state.go(
            'home.serie_show',
            {serie: options.episode.serie_slug, season: options.episode.season_slug, show: options.episode.slug}
            );
        angular.element('body').scrollTop(0);
      }
    } else {
      this.player.play(options.episode);
      angular.element('body').scrollTop(0);
    }
  }

  hasFootage() {
    return (this.serie.footages.length > 0);
  }

}

export { SerieController };
