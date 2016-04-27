import TvtPlayer from './tqplayer'

class PlayerService {

  constructor($log) {
    'ngInject';

    this.$log = $log;
    this.player = undefined;

    $log.info('player service init')
  }

  init(el, channel, start, options ) {
    this.player = new TvtPlayer('playerMain', channel, start, options)
  }

  play(embed_code) {
    this.player.play(embed_code);
  }


}

export { PlayerService }
