export function BillboardAdDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/ad/billboardad.directive.html',
    restrict: 'E',
    scope: {
      adspot: '@'
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
  }
}
