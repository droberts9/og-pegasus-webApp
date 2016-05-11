
class LoginController {

  constructor($log, $scope, $auth, $state) {
    'ngInject';

    this.loginForm = {email: '', password: '' };
    this.$log = $log;
    this.$auth = $auth;

    $scope.$on('auth:login-success', ()=> {
      $state.go('home.categories')
    });

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
