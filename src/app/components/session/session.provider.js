class SessionProvider {

  constructor() {

    this.currentUser = {};

  }

  registerUser(userData) {
    this.currentUser = userData;
  }

  $get() {
    /*
    return {
      registerUser: (userData) => {
        this.currentUser = userData;
      }
    }
    */
  }

}

export { SessionProvider }
