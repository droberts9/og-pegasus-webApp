export function CategoriesDirective() {
  'ngInject'

  let directive = {
    templateUrl: 'app/components/categories/categories.directive.html',
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

  constructor($log, $state) {
    'ngInject';
    this.$log = $log;
    this.$state = $state;
  }

  item_url(item) {
    return this.$state.href('home.serie', {slug: item.slug})
  }

}

