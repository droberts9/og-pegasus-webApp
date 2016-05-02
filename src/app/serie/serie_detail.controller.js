class SerieDetailController {

  constructor($log, $state, episode, season_episodes) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.episode = episode;
    this.season_episodes = season_episodes;
    this.season = {};

  }

}

export { SerieDetailController };
