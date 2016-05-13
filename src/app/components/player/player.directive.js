export function PlayerDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/player/player.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      episode: '<',
      playlist: '<',
      options: '@'
    },
    controller: PlayerController,
    controllerAs: 'ctrl',
    bindToController: true
  }

  return directive;
}

class PlayerController {

  constructor($log, playerService) {
    'ngInject';

    this.$log = $log;
    this.player = playerService;
    if (this.options) {
      this.parseOptions();
    }
  }
  
  parseOptions() {
    try {
      this.options = angular.fromJson(this.options);
    } catch (error) {
      this.$log.error('Error parsing player options. Must be valid JSON format', error);
      this.$log.debug(this.options);      
    }
  }
  
  $postLink() {
    this.player.init('playerMain', this.options);
    if (this.playlist) {
      this.player.setPlaylist(this.playlist, this.episode);
      if (this.options.autoplay) {
        this.player.play();
      }
    } else {
      this.player.play(this.playlist, this.episode);
    }
  }

}
