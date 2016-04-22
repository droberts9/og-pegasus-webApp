export function config ($logProvider, $authProvider, $locationProvider, $compileProvider, constantsProvider, sessionProvider ) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  // disable debug info
  // $compileProvider.debugInfoEnabled(false);
  // Disable hash (#) on urls
  $locationProvider.html5Mode(true);
  // Configure Auth
  $authProvider.configure({
    apiUrl: constantsProvider.setup.appConfig.apiUrl ,
    handleLoginResponse: (resp) => {
      sessionProvider.registerUser(resp.data.user);
    }
  });
}
