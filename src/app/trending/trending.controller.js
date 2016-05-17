class TrendingController {

  constructor($log, $state, $document, $timeout, apiService, playerService, metaService, asset, discovery) {
    'ngInject';
    this.$log = $log;
    this.$state = $state;
    this.$timeout = $timeout;
    this.api = apiService;
    this.player = playerService;
    this.metaService = metaService;
    this.asset = asset;
    this.discovery = discovery;

    angular.element($document).on('update-video-data', ()=> this.updateCurrentVideo() );
    this.metaService.keywords = this.asset.metadata.AdTags;

  }

  updateCurrentVideo() {
    let current = this.player.currentVideo();
    if (angular.isUndefined(current)) {
      return;
    }
    // $timeout by default trigger an $apply cycle.. to refresh the front
    this.$timeout(()=> {
      this.asset = current;
      this.metaService.keywords = this.asset.metadata.AdTags;
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