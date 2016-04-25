
export function CategoriesX2Directive() {
  'ngInject';

  let directive = {
    templateUrl: 'app/categories/categories_x2.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      items: '=',
      title: '@',
      kind: '@'
    },
    controller: Categoriesx2Controller,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;
}

class Categoriesx2Controller {

  constructor($log, utils) {
    'ngInject';

    this.$log = $log;
    this.utils = utils;
    this.$log.warn(this.items);
  }


  defaultImage(item) {
    // TODO: resolve default cannel image
    if (item.image) {
      return item.image;
    } else if (item.preview_image_url ){
      return item.preview_image_url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=315%C3%97175&w=315&h=175";
    }
  }

}
