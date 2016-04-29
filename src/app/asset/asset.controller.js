
class AssetController {

  constructor($log, $document, $timeout, category, asset, utils, playerService) {
    'ngInject';

    this.$log = $log;
    this.$timeout = $timeout;
    this.category = category;
    this.asset = asset;
    this.episodes = utils.groupOf(this.category.assets, 2);
    this.player = playerService;

    // event received from playerService when a video change
    angular.element($document).on('update-video-data', ()=>{ this.updateCurrentVideo() })
  }


  updateCurrentVideo() {
    let current = this.player.currentVideo();
    if (angular.isUndefined(current)) {
      return;
    }
    // $timeout by default trigger an $apply cycle.. to refresh the front
    this.$timeout(()=> {
      this.asset = current;
    }, 0)
  }

}

export { AssetController }
