export function config ($logProvider, $authProvider, $locationProvider ) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  // Disable hash (#) on urls
  $locationProvider.html5Mode(true);
  $authProvider.configure({
    apiUrl: 'http://localhost:4000/api/v1',
    handleLoginResponse: (resp) => {
      // store user on SessionService
    }
  });

}
