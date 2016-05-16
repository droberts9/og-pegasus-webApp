class TrendingController {

  constructor($log, $state, $document, $timeout, apiService, playerService, utils, asset, discovery) {
    'ngInject';
    this.$log = $log;
    this.$state = $state;
    this.$timeout = $timeout;
    this.api = apiService;
    this.player = playerService;
    this.asset = asset;
    this.discovery = utils.groupOf(discovery, 2);

    angular.element($document).on('update-video-data', ()=> this.updateCurrentVideo() );
  }
  
  updateCurrentVideo() {
    let current = this.player.currentVideo();
    if (angular.isUndefined(current)) {
      return;
    }
    // $timeout by default trigger an $apply cycle.. to refresh the front
    this.$timeout(()=> {
      this.asset = current;
    }, 0);
  }
  
  
  play(options) {
    if (options.followLink == false) {
      this.$state.go(
        'home.trending',
        {slug: options.episode.slug},
        {location: true, inherit: true, relative: this.$state.$current, notify: false}
      );
      this.player.play(options.episode, {checkPlaylist: false});
      angular.element('body').scrollTop(0);
    }
  }  
  
}

export { TrendingController }