import { AssetModel }     from '../../models/asset'
import { CategoryModel }  from '../../models/category'
import { SerieModel }     from '../../models/serie'

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
    return this.get('/categories/'+slug+'?device=web').then((resp) => {
      return new CategoryModel(resp.categories[0]);
    })
  }

  getAsset(slug) {
    return this.get('/assets/'+slug+'?device=web').then((data) => {
      return new AssetModel(data);
    });
  }

  getSeries() {
    return this.get('/series?device=web').then((resp) => {
      let data = [];
      resp.series.forEach(serie => data.push( new SerieModel(serie)) );
      return data;
    })
  }

  getSerie(slug) {
    return this.get('/series/'+slug+'?device=web').then((data) => {
      return new SerieModel(data.series[0]);
    });
  }


}

export { ApiService }
