export function BillboardAdDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/ad/billboardad.directive.html',
    restrict: 'E',
    scope: {
      adsize: '@'
    },
    replace: true,
    controller: BillboardAdController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;
}

class BillboardAdController {

  constructor($log) {
    'ngInject';

    this.$log = $log;

    if (angular.isUndefined(this.adsize)) {
      this.spotSize = 'billboard';
    } else {
      this.spotSize = this.adsize;
    }

    this.spotSize = `adspot-${this.spotSize}`;
  }


}
