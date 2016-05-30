
class MainController {
  constructor (metaService, $rootScope) {
    'ngInject';

    this.$rootScope = $rootScope;

    this.metaService = metaService;
    this.isCollapsed = false;
    this.onSuccess = $rootScope.$on('$stateChangeSuccess', () => { this.isCollapsed = false; });
  }

  hasSearchResults() {
    return angular.isDefined(this.$rootScope.searchResults);
  }

}

export { MainController }
