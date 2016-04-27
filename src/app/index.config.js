export function config ($provide, $logProvider, $authProvider, $locationProvider, $compileProvider, constantsProvider, sessionProvider ) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  // disable debug info
  // $compileProvider.debugInfoEnabled(false);
  // Disable hash (#) on urls
  $locationProvider.html5Mode({enabled: true});
  // Configure Auth
  $authProvider.configure({
    apiUrl: constantsProvider.setup.appConfig.apiUrl ,
    handleLoginResponse: (resp) => {
      sessionProvider.registerUser(resp.data.user);
    }
  });

  // monkey-patches $templateCache to have a keys() method
  $provide.decorator('$templateCache', [
      '$delegate', function($delegate) {

          var keys = [], origPut = $delegate.put;

          $delegate.put = function(key, value) {
              origPut(key, value);
              keys.push(key);
          };

          // we would need cache.peek() to get all keys from $templateCache, but this features was never
          // integrated into Angular: https://github.com/angular/angular.js/pull/3760
          // please note: this is not feature complete, removing templates is NOT considered
          $delegate.getKeys = function() {
              return keys;
          };

          return $delegate;
      }
  ]);

}
