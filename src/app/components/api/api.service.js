
class ApiService {

  constructor($log, $http, constants) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.constants = constants;
  }

  get(path) {
    return this.$http.get(this.constants.appConfig.apiUrl + path)
      .then( (resp) => {
        return resp.data;
      })
      .catch( (error) => {
        this.$log.error(error);
        return null;
      });

  }

  getCategories() {
    return this.get('/categories');
  }

  getSeries() {
    return this.get('/series');
  }

  getSerie(slug) {
    return this.get('/series/'+slug+'?device=web');
  }


}

export { ApiService }
