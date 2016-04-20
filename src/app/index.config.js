export function config ($logProvider, $authProvider, $locationProvider, constantsProvider, sessionProvider ) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  // Disable hash (#) on urls
  $locationProvider.html5Mode(true);
  $authProvider.configure({
    apiUrl: constantsProvider.setup.appConfig.apiUrl ,
    handleLoginResponse: (resp) => {
      sessionProvider.registerUser(resp.data.user);
    }
  });

}
