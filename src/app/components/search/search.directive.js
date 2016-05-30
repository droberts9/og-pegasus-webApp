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

  constructor($log) {
    'ngInject';

    this.$log = $log;
    this.search_text = "";

  }

  submit() {
    // cms-search-result directive will capture this event
    angular.element('body').trigger({type: 'cms-search', search_text: this.search_text});
  }

}
