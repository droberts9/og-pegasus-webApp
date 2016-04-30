export function SeriesDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/series/series.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      items: '='
    }
  };

  return directive;

}
