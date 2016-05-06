export function PlayerDirective($log, playerService) {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/player/player.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      episode: '<',
      playlist: '<'
    },
    controller: PlayerController,
    controllerAs: 'ctrl',
    bindToController: true,
    link: function(scope, elem, attr, ctrl) {
      playerService.init('playerMain');
      playerService.play(ctrl.episode);
    }
  }

  return directive;
}

class PlayerController {

  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

}
