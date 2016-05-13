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
  }
  
  hasCustomButton(item) {
    if (angular.isDefined(item.metadata.ButtonTitle)) {
      return true;
    } else {
      return false;
    }
  }
  
  isRemoteLink(item) {
    if (item.metadata.NewTab === "true") {
      return '_blank';
    } else {
      return '_self';
    }
  }
}




