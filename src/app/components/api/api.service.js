
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
        this.$log.info('api: '+path, resp);
        return resp.data;
      })
      .catch( (error) => {
        this.$log.error(error);
        return null;
      });

  }

  getCategories() {
    return this.get('/categories/categories?device=web');
  }

  getCategory(slug) {
    return this.get('/categories/'+slug+'?device=web'); //.then( (resp) => { return resp.categories[0]})
  }

  getSeries() {
    return this.get('/series');
  }

  getSerie(slug) {
    return this.get('/series/'+slug+'?device=web');
  }


}

export { ApiService }
