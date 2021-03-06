export function SeasonDirective() {
  'ngInject';

  let directive = {
    templateUrl: 'app/serie/season.directive.html',
    restrict: 'E',
    replace: true,
    scope: {
      playlist: '=',
      followlink: '=',
      onplay: '&'
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

  constructor($log, $state, playerService) {
    'ngInject';

    this.player = playerService;
    this.$log = $log;
    this.$state = $state;
  }

  nextSlide() {
    this.slick.slick('slickNext');
  }

  prevSlide() {
    this.slick.slick('slickPrev');
  }

  defaultImage(item) {
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
    if (angular.isDefined(this.followlink)) {
      this.onplay({item: item});
    }
    else {
      // update url on browser without reload page
      this.$state.go(
          'home.serie_show',
          {serie: item.serie_slug, season: item.season_slug, show: item.slug},
          {location: true, inherit: true, relative: this.$state.$current, notify: false}
          );
      this.player.play(item.embed_code);
    }

  }


}
