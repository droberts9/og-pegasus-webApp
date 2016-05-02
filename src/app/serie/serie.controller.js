class SerieController {

  constructor(apiService, $scope, $log, $state, serie, seasons) {
    'ngInject';

    this.api = apiService;
    this.$scope = $scope;
    this.$log = $log;
    this.$state = $state;
    this.serie = serie;
    this.seasons = seasons;

  }

  slplay(item) {
    this.$state.go('home.serie_show', {season: item.season_slug, show: item.slug});
  }

}

export { SerieController };
