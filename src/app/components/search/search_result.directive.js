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

  constructor($log) {
    'ngInject';

    this.$log = $log;
  }

  item_url(model) {

    let result = '#none';

    switch (model.constructor.name) {
      case 'EpisodeModel':
        // TODO: Url to Episodes
        result = '/serie/??/season/??/espide'+model.slug;
        break;
      case 'SeasonModel':
        result = '/serie/??/season/'+model.slug;
        break

    }

    return result;
  }
}