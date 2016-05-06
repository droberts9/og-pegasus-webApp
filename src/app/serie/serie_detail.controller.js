class SerieDetailController {

  constructor($log, $timeout, $document, $state, playerService, episode, season, discovery) {
    'ngInject';

    this.$log      = $log;
    this.$state    = $state;
    this.$timeout  = $timeout;
    this.episode   = episode;
    this.season    = season;
    this.discovery = discovery;
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

}

export { SerieDetailController };
