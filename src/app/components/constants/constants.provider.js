class ConstantsProvider {

  constructor() {
    'ngInject';
    this.setup = {
      appConfig: {
        apiUrl: 'http://dev.bhd.local.dev:4000/api/v1'
      }
    };
  }

  /*@ngInject*/
  $get() {
    return this.setup;
  }

}

export { ConstantsProvider }
