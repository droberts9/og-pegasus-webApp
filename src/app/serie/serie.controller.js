
class SerieController {

  constructor(apiService, $scope, $log, serie) {
    'ngInject'

    this.api = apiService;
    this.$scope = $scope;
    this.$log = $log;

    //this.api.getSerie().then( result => this.items = result.series );
    this.serie = serie;

  }

}

export { SerieController}
