
class LoginController {

  constructor($log, $auth) {
    'ngInject';

    this.loginForm = {email: '', password: '' };
    this.$log = $log;
    this.$auth = $auth;
  }

  doLogin() {
    this.$auth.submitLogin(this.loginForm)
      .then((resp) => {
        this.$log.debug(resp);
      })
      .catch((resp) => {
        this.$log.error(resp);
      });
  }

}

export { LoginController }
