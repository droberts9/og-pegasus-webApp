import { AssetModel }  from './asset'
import { SeasonModel } from './season'
import { Utils }       from '../components/utils/utils.factory'

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
      var m = new SerieModel(data[i]);
      modelArray.push(m);
    }
    return modelArray;
  }

  klass() {
    return 'SerieModel';
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

  get slug_url() {
    return `/series/${this.slug}`;
  }
}

export { SerieModel }

