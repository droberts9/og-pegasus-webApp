class ConstantsProvider {

  constructor() {
    'ngInject';
    this.setup = {
      appConfig: {
        apiUrl_loc: 'http://dev.fish.local.dev:4000/api/v1',
        apiUrl: 'http://dev.fish.sporkers.com/api/v1'
      }
    };
  }

  /*@ngInject*/
  $get() {
    return this.setup;
  }

}

export { ConstantsProvider }
