class ConstantsProvider {

  constructor() {
    'ngInject';
    this.setup = {
      appConfig: {
        apiUrl_dev: 'http://dev.fish.local.dev:4000/api/v1',
        apiUrl: 'http://dev.fish.sporkers.com/api/v1'
      },
      ooplayer: {
        pcode: 'RyZ2cyOqrM7SQLfKy4Hys7rcjg9c',
        playerBrandingId: '24eb009549154660af0de0d4cd338508',
        skin2: {'config': '//player.ooyala.com/static/v4/stable/4.3.3/skin-plugin/skin.json'},
        skin: {'config': '/assets/skin.json'},
        debug: false
      }
    };
  }

  /*@ngInject*/
  $get() {
    return this.setup;
  }

}

export { ConstantsProvider }
