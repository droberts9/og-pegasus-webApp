export function SearchResultDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/search/search_result.directive.html',
    scope: {
      items: '=',
      caption: '@'
    },
    controller: SearchResultController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;

}

class SearchResultController {

  constructor($log, $rootScope, $scope, apiService, playerService) {
    'ngInject';

    this.$log = $log;
    this.$rootScope = $rootScope;
    this.api = apiService;
    this.playerService = playerService;
    this.search_result = undefined;
    this.changeEventOff = $rootScope.$on('$stateChangeStart', ()=> { this.closeResults() });

    angular.element('body').on('cms-search', (evt) => {this.doSearch(evt)});
    $scope.$on('$destroy', ()=> { this.changeEventOff() });

  }

  closeResults() {
    this.search_result = undefined;
    this.search_result_not_found = undefined;
    angular.element('body').removeClass('on-search');
  }

  hasResults() {
    let results = (this.search_result || this.search_result_not_found) ? true : false;
    if (results) {
      this.playerService.pause();
    }
    return results;
  }


  doSearch(evt) {
    this.search_text = evt.search_text;
    this.search_result_not_found = ' ';
    this.search_result = undefined;

    this.api.search(this.search_text).then((resp) => {
      angular.element('body').addClass('on-search');
      if ((resp.length == 0) || (resp == ' ')) {
        this.$log.error('search result', resp);
        this.search_result_not_found = 'No results found';
        this.search_result = undefined;
      } else {
        this.search_result = resp;
      }
    });

  }

  item_url(model) {

    let result = '#none';

    switch (model.klass()) {
      case 'EpisodeModel':
        // TODO: Url to Episodes
        result = '/series/'+model.serie_slug+'/'+model.season_slug+'/'+model.slug;
        break;
      case 'SeasonModel':
        result = '/series/'+model.serie_slug+'/seasons/'+model.slug;
        break
      case 'SerieModel':
        result = '/series/'+model.slug;
        break
      case 'CategoryModel':
        result = '/channels/'+model.slug;
        break

    }

    return result;
  }
}
