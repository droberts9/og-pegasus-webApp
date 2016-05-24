
class MainController {
  constructor (metaService, $rootScope) {
    'ngInject';

    this.metaService = metaService;
    this.isCollapsed = false;
    this.onSuccess = $rootScope.$on('$stateChangeSuccess', () => { this.isCollapsed = false; });
  }

}

export { MainController }
