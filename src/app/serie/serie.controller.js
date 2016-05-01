
class SerieController {

  constructor(apiService, $scope, $log, serie, seasons) {
    'ngInject'

    this.api = apiService;
    this.$scope = $scope;
    this.$log = $log;
    this.serie = serie;
    this.seasons = seasons;

  }

}

export { SerieController}
