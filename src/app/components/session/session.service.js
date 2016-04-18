class SessionService {

  constructor() {
    'ngInject';

    this.currentUser = {};

  }

  registerUser(data) {
    this.currentUser = data;
  }

}

export { SessionService }
