export function SeasonDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/serie/season.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      playlist: '=',
      onplay: '&',
      followLink: '='
    },
    controller: SeasonController,
    controllerAs: 'ctrl',
    bindToController: true,
    link: function(scope, elem, attr, ctrl) {
      ctrl.slick = angular.element(elem).find('slick');
      angular.element(elem).find('.prev-button').on('click', ()=> { ctrl.prevSlide(); });
      angular.element(elem).find('.next-button').on('click', ()=> { ctrl.nextSlide(); });
    }
  };

  return directive;
}

class SeasonController {

  constructor($log, $state, utils, playerService) {
    'ngInject';

    this.player = playerService;
    this.$log = $log;
    this.$state = $state;
    this.utils = utils;
    this.willFollowLink = this.followLink || 'true';
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

  play(item) {
    if (this.willFollowLink && angular.isDefined(this.onplay)) {
      this.onplay({item: item});
    }
    else {
      this.player.play(item);
    }

  }


}
