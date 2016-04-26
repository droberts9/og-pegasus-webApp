
class CategoryController {

  constructor(apiService, $log, category, utils) {
    'ngInject';
    this.api = apiService;
    this.$log = $log;

    if ( category && category.categories[0]) {
      this.category = category.categories[0];
      this.current = this.category.assets[0];
      this.assets = utils.groupOf(this.category.assets, 2);
    } else {
      this.category = undefined;
      this.current = undefined;
    }

  }

  default_category_image() {
    // TODO: resolve default cannel image
    if (angular.isDefined(this.category.cover) && this.category.cover != "" && this.category.cover != null) {
      return this.category.cover;
    } else if (this.category.images.length > 0) {
      return this.category.images[0].url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=1300&h=520";
    }
  }

  default_image() {
    // TODO: resolve default cannel image
    if (this.current.image) {
      return this.current.image;
    } else if (this.current.images.length > 0) {
      return this.current.images[0].url;
    } else if (this.current.preview_image_url != '') {
      return this.current.preview_image_url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=1300&h=520";
    }
  }

}

export { CategoryController }
