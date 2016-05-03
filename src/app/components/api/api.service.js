import { AssetModel }     from '../../models/asset';
import { CategoryModel }  from '../../models/category';
import { SerieModel }     from '../../models/serie';
import { SeasonModel }    from '../../models/season';
import { EpisodeModel }   from '../../models/episode';

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
      });

  }

  getCategories() {
    return this.get('/categories/categories?device=web');
  }

  getCategory(slug) {
    return this.get('/categories/'+slug+'?device=web').then((resp) => {
      if (resp) {
        return new CategoryModel(resp.categories[0]);
      } else {
        return new CategoryModel();
      }
    })
  }

  getAsset(slug) {
    return this.get('/assets/'+slug+'?device=web').then((data) => {
      return new AssetModel(data);
    });
  }

  getSeries() {
    return this.get('/series?device=web').then((resp) => {
      if (resp) {
        return SerieModel.loadData(resp.series);
      } else {
        return [];
      }
    });
  }

  getSerie(slug) {
    return this.get(`/series/${slug}?device=web`).then((data) => {
      if (data) {
        return new SerieModel(data.series[0]);
      } else {
        return new SerieModel();
      }
    });
  }

  getSeasons(slug) {
    return this.get(`/series/${slug}/seasons?device=web`).then((data) => {
      if (data) {
        return SeasonModel.loadData(data.seasons);
      } else {
        return [];
      }
    });
  }

  getSeason(serie, season) {
    return this.get(`/series/${serie}/${season}/episodes`).then((data) =>{
      if (data.episodes) {
        return EpisodeModel.loadData(data.episodes);
      } else {
        return [];
      }

    });
  }

  getEpisode(serie, season, episode) {
    return this.get(`/series/${serie}/${season}/${episode}`).then((data) =>{
      if (data.episodes) {
        return new EpisodeModel(data.episodes[0]);
      } else {
        return new EpisodeModel();
      }
    });
  }

  getSeriesFeatured() {
    return this.get('/series/featured?device=web').then((resp) => {
      if (resp) {
        return SerieModel.loadData(resp.series);
      } else  {
        return [];
      }
    });
  }

  search(query) {
    return this.get('/search?query='+encodeURIComponent(query)).then((resp) => {
      if (resp) {
        var result = {};

        if (resp.result.seasons) {
          result.seasons = SeasonModel.loadData(resp.result.seasons);
        }

        if (resp.result.episodes) {
          result.episodes = EpisodeModel.loadData(resp.result.episodes)
        }

        if (resp.result.series) {
          result.series = SerieModel.loadData(resp.result.series);
        }

        if (resp.result.categories) {
          result.categories = CategoryModel.loadData(resp.result.categories);
        }

        return result;

      } else {
        return [];
      }
    });
  }


}

export { ApiService };
