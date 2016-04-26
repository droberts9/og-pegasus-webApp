
import _ from 'lodash';

export function CategoriesX2Directive() {
  'ngInject';

  let directive = {
    templateUrl: 'app/categories/categories_x2.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      items: '=',
      mainAsset: '=',
      caption: '@',
      kind: '@'
    },
    controller: Categoriesx2Controller,
    controllerAs: 'ctrl',
    bindToController: true,
    link: function(scope, elem, attr, ctrl) {
      ctrl.slick = angular.element(elem).find('slick');
      angular.element(elem).find('.prev-button').on('click', ()=> {ctrl.prevSlide()});
      angular.element(elem).find('.next-button').on('click', ()=> {ctrl.nextSlide()});
    }
  };

  return directive;
}

class Categoriesx2Controller {

  constructor($log, utils) {
    'ngInject';

    this.kindTypes = ['big', 'regular'];
    this.$log = $log;
    this.utils = utils;
    if (angular.isUndefined(this.kind)) {
      this.kind = 'regular';
    }
    this.kind = this.kind.toLowerCase();
    if (!_.includes(this.kindTypes, this.kind)) {
      this.$log.error( 'Slider property kind invalid: ['+this.kind+']');
    }

  }

  nextSlide() {
    this.slick.slick('slickNext');
  }

  prevSlide() {
    this.slick.slick('slickPrev');
  }

  defaultImage(item) {
    // TODO: resolve default cannel image
    // this.$log.warn(item);
    if (item.image) {
      return item.image;
    } else if (item.preview_image_url) {
      return item.preview_image_url;
    } else {
      // TODO: move this to constants
      return "https://placeholdit.imgix.net/~text?txtsize=33&txt=Missing+Image&w=315&h=175";
    }
  }

}
