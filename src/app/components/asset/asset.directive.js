class AssetController {
  constructor() {
    'ngInject'
  }

}

function AssetDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/asset/asset.directive.html',
    scope: {
      asset: '='
    },
    controller: AssetController
  };

  return directive;
}

export { AssetDirective }




