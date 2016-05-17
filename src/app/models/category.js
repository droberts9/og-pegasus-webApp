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

  get defaultImage() {
    if ((this.images) && (this.images.length > 0)) {
      return this.images[0].url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=1920&h=1080";
    }
  }

}

export { CategoryModel }
