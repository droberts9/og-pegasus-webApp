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
    this.$log.debug("play:", {serie: item.serie_slug, season: item.season_slug, show: item.slug});
    this.$state.go('home.serie_show', {serie: item.serie_slug, season: item.season_slug, show: item.slug});
  }

}

export { SerieController };
