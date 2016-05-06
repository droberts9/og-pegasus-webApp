import _ from 'lodash';

export function CategoriesX2Directive() {
  'ngInject';

  let directive = {
    templateUrl: 'app/components/categories/categories_x2.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      playlist: '<',
      caption: '@',
      kind: '@',
      followLink: '@',
      onplay: '&'
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

  constructor($log, utils, playerService) {
    'ngInject';

    this.player = playerService;
    this.kindTypes = ['big', 'regular'];
    this.$log = $log;
    this.utils = utils;
    this.followLink = this.followLink || 'true';

    this.kind = (this.kind || 'regular').toLowerCase();
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

  // Proxy the Play call to the Controller throw the 'onplay' parameter
  // The controller know how to handle the request
  play(episode) {
    this.onplay({
      options: {
        followLink: this.followLink,
        episode: episode
      }
    });
  }

}
