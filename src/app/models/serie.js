import { AssetModel } from './asset'
import { SeasonModel } from './season'

class SerieModel {

  constructor(data) {
    this.title = '';
    this.description = '';
    this.slug = '';
    this.studio = '';
    this.rating = '';
    this.images = [];
    this.footages = [];
    this.seasons = [];

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
      var m = new SerieModel(data[i]);
      modelArray.push(m);
    }
    return modelArray;
  }

  initValues(data) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        if (prop === 'footages') {
          this[prop] = AssetModel.loadData(data[prop]);
        } else if (prop === 'seasons') {
          this[prop] = SeasonModel.loadData(data[prop]);
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
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=1980&h=800";
    }
  }

  get slug_url() {
    return `/series/${this.slug}`;
  }
}

export { SerieModel }

