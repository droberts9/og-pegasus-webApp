import TvtPlayer from './tqplayer';

class PlayerService {

  constructor($log, constants) {
    'ngInject';

    this.$log = $log;
    this.constants = constants;
    this.player = undefined;

    $log.info('player service init');
  }

  init(el, channel, start, options ) {
    if (angular.isUndefined(options)) {
      options = {};
    }
    options.ooplayer = this.constants.ooplayer;
    this.player = new TvtPlayer('playerMain', channel, start, options);
  }

  play(embed_code) {
    this.player.play(embed_code);
  }

  pause() {
    if (angular.isDefined(this.player)) {
      this.player.pause();
    } else {
      return undefined;
    }
  }

  currentVideo() {
    if (angular.isDefined(this.player)) {
      return this.player.current;
    } else {
      return undefined;
    }
  }

  currentPlaylist() {
    if (angular.isDefined(this.player)) {
      return this.player.playlist;
    } else {
      return undefined;
    }
  }

  destroyPlayer() {
    if (angular.isDefined(this.player)) {
      this.player.destroyPlayer();
      this.$log.info('player destroyed');
    }
  }

}

export { PlayerService }
