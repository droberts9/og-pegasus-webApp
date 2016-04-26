export function CategoriesDirective() {
  'ngInject'

  let directive = {
    templateUrl: 'app/categories/categories.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      items: '=',
      caption: '@'
    },
    controller: CategoryController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;

}

class CategoryController {

  constructor($log) {
    'ngInject';
    this.$log = $log;
  }

  defaultImage() {
    // TODO: resolve default cannel image
    return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=315&h=175"
  }

}

