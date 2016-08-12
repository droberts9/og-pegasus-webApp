import { Utils }       from '../components/utils/utils.factory'
import { EpisodeModel } from './episode'

class SeasonModel {
  constructor(data) {
    this.slug = '';
    this.serie_slug = '';
    this.title = '';
    this.tagline = '';
    this.description = '';
    this.images = [];
    this.episodes = [];
    this.utils = new Utils();
    
    this.initValues(data);
  }

  static loadData(data) {
    if (!angular.isArray(data)) {
      /* eslint-disable */
      console.error("SerieModel#loadData - data isn't an Array");
      /* eslint-enable */
      return null;
    }
    var modelArray = [];
    for (var i = 0, l = data.length; i < l; i ++) {
      var m = new SeasonModel(data[i]);
      modelArray.push(m);
    }
    return modelArray;
  }

  klass() {
    return 'SeasonModel';
  }

  initValues(data) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        if (prop === 'episodes') {
          this[prop] = EpisodeModel.loadData(data[prop]);
        } else {
          this[prop] = data[prop];
        }
      }
    }
  }

  defaultImage(sizeRequest) {
    var imageUrl = undefined;

    if ((this.images) && (this.images.length > 0)) {
      imageUrl = this.utils.extractImageSize(sizeRequest, this.images);
    }

    if (angular.isUndefined(imageUrl)) {
      imageUrl = this.utils.stubImage(sizeRequest);
    }

    return imageUrl;
  }

}

export { SeasonModel }
