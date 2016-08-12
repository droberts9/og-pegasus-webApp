import { Utils }       from '../components/utils/utils.factory'
import { AssetModel } from './asset'

class CategoryModel {

  constructor(data) {

    this.accent_color  = '';
    this.access_type   = '';
    this.assets        = [];
    this.cover         = '';
    this.description   = '';
    this.images        = [];
    this.name          = '';
    this.slug          = '';
    this.subcategories = [];
    this.utils         = new Utils();

    this.initValues(data);

  }

  static loadData(data) {
    if (!angular.isArray(data)) {
      /* eslint-disable */
      console.error("CategoryModel#loadData - data isn't an Array");
      /* eslint-enable */
      return null;
    }
    var modelArray = [];
    for (var i = 0, l = data.length; i < l; i ++) {
      var m = new CategoryModel(data[i]);
      modelArray.push(m);
    }
    return modelArray;
  }

  klass() {
    return 'CategoryModel';
  }


  initValues(data) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        if (prop == 'assets') {
          this[prop] = AssetModel.loadData(data[prop], data.slug);
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

export { CategoryModel }
