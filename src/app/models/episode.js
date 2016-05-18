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

  get defaultImage() {
    if ((this.images) && (this.images.length > 0)) {
      return this.images[0].url;
    } if (this.preview_image_url != "") {
      return this.preview_image_url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=1920&h=1080";
    }
  }

}

export { EpisodeModel }
