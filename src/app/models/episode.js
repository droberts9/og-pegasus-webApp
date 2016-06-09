class EpisodeModel {

  constructor(data) {
    this.slug = '';
    this.season_slug = '';
    this.serie_slug = '';
    this.title = '';
    this.description = '';
    this.duration = 0;
    this.embed_code = '';
    this.preview_image_url = '';
    this.rating = '';
    this.season = '';
    this.aired = '';
    this.studio = '';

    this.initValues(data);
  }

  static loadData(data) {
    if (!angular.isArray(data)) {
      /* eslint-disable */
      console.error("EpisodeModel#loadData - data isn't an Array");
      /* eslint-enable */
      return null;
    }
    var modelArray = [];
    for (var i = 0, l = data.length; i < l; i ++) {
      var m = new EpisodeModel(data[i]);
      modelArray.push(m);
    }
    return modelArray;
  }

  klass() {
    return 'EpisodeModel';
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

    if ((this.images) && (this.images.length > 0)) {
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

export { EpisodeModel }
