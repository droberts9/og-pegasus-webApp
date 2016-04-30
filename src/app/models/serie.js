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
  
  initValues(data) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        this[prop] = data[prop];
      }
    }
  }
  
  get defaultImage() {
    if (this.images.length > 0) {
      return this.images[0].url;
      
    } else if (angular.isDefined(this.preview_image_url)) {
      return this.preview_image_url;
      
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=950&h=535";
    }
  }
  
  get slug_url() {
    return `/series/${this.slug}`;
  }
}

export { SerieModel }