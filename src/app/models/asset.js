import { Utils }       from '../components/utils/utils.factory'

class AssetModel {

  constructor(data) {

    this.ad_set_id         = '';
    this.cast              = '';
    this.crew              = '';
    this.description       = '';
    this.duration          = 0;
    this.embed_code        = '';
    this.image             = '';
    this.images            = [];
    this.metadata          = {};
    this.name              = '';
    this.preview_image_url = '';
    this.rating            = '';
    this.slug              = '';
    this.utils             = new Utils();

    this.initValues(data);

  }

  static loadData(data, category) {
    if (!angular.isArray(data)) {
      /* eslint-disable */
      console.error("AssetModel#loadData - data isn't an Array");
      /* eslint-enable */
      return null;
    }
    var modelArray = [];
    for (var i = 0, l = data.length; i < l; i ++) {
      var m = new AssetModel(data[i]);
      m.category = category;
      modelArray.push(m);
    }
    return modelArray;
  }

  klass() {
    return 'AssetModel';
  }

  initValues(data) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        this[prop] = data[prop];
      }
    }
  }

  defaultImage(sizeRequest) {
    var imageUrl = undefined;

    if (this.image) {
      imageUrl =  this.image;
    } else if ((this.images) && (this.images.length > 0)) {
      imageUrl = this.utils.extractImageSize(sizeRequest, this.images);
    } else if (this.preview_image_url != '') {
      imageUrl = this.preview_image_url;
    }

    if (angular.isUndefined(imageUrl)) {
      imageUrl = this.utils.stubImage(sizeRequest);
    }

    return imageUrl;
  }


}

export { AssetModel }
