export function SearchResultsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/search/search_results.directive.html',
    scope: {
      items: '=',
      caption: '@'
    },
    controller: SearchResultsController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;

}

class SearchResultsController {

  constructor($log) {
    'ngInject';

    this.$log = $log;
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
