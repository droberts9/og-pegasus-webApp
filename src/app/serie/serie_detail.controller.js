class SerieDetailController {

  constructor($log, $timeout, $document, $state, playerService, episode, season_episodes) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.$timeout = $timeout;
    this.episode = episode;
    this.season_episodes = season_episodes;
    this.season = {};
    this.player = playerService;

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
