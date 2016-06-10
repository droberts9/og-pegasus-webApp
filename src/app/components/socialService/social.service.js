class SocialService {

  constructor($log, $state, utils) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.utils = utils;
  }

  encodedTitle(item) {
    return `Video: ${this.utils.encodeUri(item.name)} on Saltwater.TV`;
  }

  encodedUrl(model) {
    if (angular.isUndefined(model)) {
      return this.$log.warn('SocialService#encodedUrl: model empty');
    }
    if (model.klass() == 'AssetModel') {
      return this.$state.href(
        'home.trending',
        {slug: model.slug},
        {absolute: true}
      );
    } else if (model.klass() == 'EpisodeModel') {
      return this.$state.href(
              'home.serie_show',
              {serie: model.serie_slug, season: model.season_slug, show: model.slug},
              {absolute:true}
            );
    } else if (model.klass() == 'SerieModel') {
      return this.$state.href(
              'home.serie',
              {slug: model.slug},
              {absolute:true}
            );
    } else {
      this.$log.debug('categoryx2#encodeUrl', model.klass());
    }
  }

}

export { SocialService }
