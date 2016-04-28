class ConstantsProvider {

  constructor() {
    'ngInject';
    this.setup = {
      appConfig: {
        apiUrl: 'http://dev.fish.local.dev:4000/api/v1',
        apiUrl_prod: 'http://dev.bhd.sporkers.com/api/v1'
      }
    };
  }

  /*@ngInject*/
  $get() {
    return this.setup;
  }

}

export { ConstantsProvider }
