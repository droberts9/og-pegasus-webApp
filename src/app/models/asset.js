
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
    this.rating            = 0;
    this.slug              = '';

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

  initValues(data) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        this[prop] = data[prop];
      }
    }
  }

  get defaultImage() {

    if (this.image) {
      return this.image;
    } else if (this.images.length > 0) {
      return this.images[0].url;
    } else if (this.preview_image_url != '') {
      return this.preview_image_url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=950&h=535";
    }
  }

}

export { AssetModel }
