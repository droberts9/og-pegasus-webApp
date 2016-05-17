import _ from 'lodash';

export function CategoriesX2Directive($log, utils, responsiveHelper) {
  'ngInject';

  let determineTemplate = function() {
    if (responsiveHelper.isMobile()) {
      return 'app/components/categories/categories_x2.directive.mobile.html';
    } else {
      return 'app/components/categories/categories_x2.directive.desktop.html';
    }
  };


  let directive = {
    templateUrl: determineTemplate,
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

  constructor($log, utils, playerService, responsiveHelper) {
    'ngInject';

    this.player = playerService;
    this.kindTypes = ['big', 'regular'];
    this.$log = $log;

    this.kind = (this.kind || 'regular').toLowerCase();
    if (!_.includes(this.kindTypes, this.kind)) {
      this.$log.error( 'Slider property kind invalid: ['+this.kind+']');
    }

    if (responsiveHelper.isMobile()) {
      this.grp_playlist = utils.groupOf(this.playlist, 3);
    } else {
      this.grp_playlist = utils.groupOf(this.playlist, 2);
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
        followLink: (this.followLink == true) || (this.followLink == 'true') || (this.followLink == undefined) ? true : false,
        episode: episode
      }
    });
  }


}
