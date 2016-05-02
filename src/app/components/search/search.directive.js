export function SearchDirective($log) {
  'ngInject';

  let linkFn = function(scope, elem, attrs, ctrl) {
    $log.warn(ctrl);
  };

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/search/search.directive.html',
    scope: {
    },
    controller: SearchController,
    controllerAs: 'ctrl',
    bindToController: true,
    link: linkFn
  };

  return directive;

}

class SearchController {

  constructor($log, $rootScope, $scope, apiService) {
    'ngInject';

    this.$log = $log;
    this.search_text = "";
    this.api = apiService;
    this.search_result = undefined;
    this.changeEventOff = $rootScope.$on('$stateChangeStart', ()=> { this.closeResults() });

    $scope.$on('$destroy', ()=> { this.changeEventOff() });
  }

  hasResults() {
    this.$log.info('search result:', this.search_result);
    return (this.search_result || this.search_result_not_found) ? true : false;
  }

  submit() {

    this.api.search(this.search_text).then((resp) => {
      this.search_result = resp;
      this.search_result_not_found = undefined;
    }).catch((resp) => {
      if ((resp.data.status == 'error') && (resp.status == 404)) {
        this.$log.error('search result', resp);
        this.search_result_not_found = 'No results found';
        this.search_result = undefined;
      } else {
        this.$log.error(resp);
      }
    })
  }

  closeResults() {
    this.search_result = undefined;
    this.search_result_not_found = undefined;
  }

}
