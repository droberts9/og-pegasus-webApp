export function SearchDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/search/search.directive.html',
    scope: {
    },
    controller: SearchController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;

}

class SearchController {

  constructor($log, $rootScope, $scope, apiService, playerService) {
    'ngInject';

    this.$log = $log;
    this.$rootScope = $rootScope;
    this.search_text = "";
    this.api = apiService;
    this.playerService = playerService;
    this.search_result = undefined;
    this.changeEventOff = $rootScope.$on('$stateChangeStart', ()=> { this.closeResults() });

    $scope.$on('$destroy', ()=> { this.changeEventOff() });
  }

  hasResults() {
    let results = (this.search_result || this.search_result_not_found) ? true : false;
    if (results) {
      this.playerService.pause();
    }
    return results;
  }

  submit() {

    this.search_result_not_found = ' ';
    this.search_result = undefined;

    this.api.search(this.search_text).then((resp) => {
      if ((resp.length == 0) || (resp == ' ')) {
        this.$log.error('search result', resp);
        this.search_result_not_found = 'No results found';
        this.search_result = undefined;
      } else {
        this.search_result = resp;
        this.$rootScope.searchResults = resp;
      }


    })
  }

  closeResults() {
    this.search_result = undefined;
    this.search_result_not_found = undefined;
  }

}
