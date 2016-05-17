
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

  get defaultImage() {
    if ((this.images) && (this.images.length > 0)) {
      return this.images[0].url;

    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=1920&h=1080";
    }
  }

}

export { SeasonModel }
