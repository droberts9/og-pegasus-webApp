class ConstantsProvider {

  constructor() {
    this.appConfig = {
      apiUrl: 'http://dev.bhd.local.dev:4000/api/v1'
    };
  }

  $get() {
  }

}

export { ConstantsProvider }
