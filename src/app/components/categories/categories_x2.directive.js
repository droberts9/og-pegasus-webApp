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

  constructor($log, $state, utils, playerService, responsiveHelper) {
    'ngInject';

    this.player = playerService;
    this.kindTypes = ['big', 'regular', 'single'];
    this.$log = $log;
    this.$state = $state;
    this.utils = utils;

    this.kind = (this.kind || 'regular').toLowerCase();
    if (!_.includes(this.kindTypes, this.kind)) {
      this.$log.error( 'Slider property kind invalid: ['+this.kind+']');
    }

    if (responsiveHelper.isMobile()) {
      this.grp_playlist = utils.groupOf(this.playlist, 3);
    } else {
      if (this.kind === 'single') {
        this.grp_playlist = this.playlist;
      } else {
        this.grp_playlist = utils.groupOf(this.playlist, 2);
      }
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

  encodedTitle(episode) {
    return `Video: ${this.utils.encodeUri(episode.name)} on SaltWater.TV`;
  }

  encodedUrl(episode) {
    if (angular.isUndefined(episode)) {
      return this.$log.warn('episode empty');
    }
    if (episode.klass() == 'AssetModel') {
      return this.$state.href(
        'home.trending',
        {slug: episode.slug},
        {absolute: true}
      );
    } else if (episode.klass() == 'EpisodeModel') {
      return this.$state.href(
              'home.serie_show',
              {serie: episode.serie_slug, season: episode.season_slug, show: episode.slug},
              {absolute:true}
            );
    } else {
      this.$log.debug('categoryx2#encodeUrl', episode.klass());
    }
  }


  isKind(value) {
    return this.kind === value;
  }


}
