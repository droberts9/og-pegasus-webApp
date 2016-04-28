export function PlayerDirective($log, playerService) {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/player/player.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      embed_code: '@',
      playlist: '='
    },
    controller: PlayerController,
    controllerAs: 'ctrl',
    bindToController: true,
    link: function(scope) {
      playerService.init('playerMain', scope.ctrl.playlist, scope.ctrl.embed_code);
      playerService.play(scope.ctrl.embed_code);
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
