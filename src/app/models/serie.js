class SerieModel {

  constructor(data) {
    this.title = '';
    this.description = '';
    this.slug = '';
    this.studio = '';
    this.rating = 0;
    this.images = [];
    this.footages = [];

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
        this[prop] = data[prop];
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

