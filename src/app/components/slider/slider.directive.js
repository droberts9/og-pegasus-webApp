export function SliderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: './app/components/slider/slider.directive.html',
    scope: {
      playlist: '='
    },
    controller: SliderController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;

}

class SliderController {

  constructor($log) {
    'ngInject';

    this.$log = $log;
    // $log.warn(this.playlist);
  }
}




