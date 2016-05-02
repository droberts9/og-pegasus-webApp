import TvtPlayer from './tqplayer';

class PlayerService {

  constructor($log) {
    'ngInject';

    this.$log = $log;
    this.player = undefined;

    $log.info('player service init');
  }

  init(el, channel, start, options ) {
    this.player = new TvtPlayer('playerMain', channel, start, options);
  }

  play(embed_code) {
    this.player.play(embed_code);
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
