export class SeriesController {

  constructor(apiService, $log, series) {
    'ngInject';

    this.api = apiService;
    this.$log = $log;
    this.series = series;
    $log.debug(series);
  }

}
