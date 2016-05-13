export function SliderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/slider/slider.directive.html',
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
    $log.warn(this.playlist);
  }
  
  hasCustomButton(item) {
    if (angular.isDefined(item.metadata.ButtonTitle)) {
    this.$log.warn("aa", item);
      return true;
    } else {
      return false;
    }
  }
}




