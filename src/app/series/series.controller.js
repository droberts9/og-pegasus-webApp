
class SeriesController {

  constructor(apiService, $scope, $log) {
    'ngInject'

    this.api = apiService;
    this.$scope = $scope;
    this.$log = $log;

    this.api.getSeries().then( result => this.items = result.series );

  }

}

export { SeriesController}
