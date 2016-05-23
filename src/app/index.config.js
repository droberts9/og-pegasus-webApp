export function config ($provide, $logProvider, $authProvider, $locationProvider, $compileProvider, EnvironmentConfig, sessionProvider, DoubleClickProvider ) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  // disable debug info
  // $compileProvider.debugInfoEnabled(false);
  // Disable hash (#) on urls
  $locationProvider.html5Mode({enabled: true});
  // Configure Auth
  $authProvider.configure({
    apiUrl: EnvironmentConfig.appConfig.apiUrl ,
    handleLoginResponse: (resp) => {
      sessionProvider.registerUser(resp.data.user);
    }
  });

  DoubleClickProvider.defineSlot('/6747/saltwatertv', [970, 250], 'div-gpt-ad-970x250-0')
                     .defineSlot('/6747/saltwatertv', [728, 90],  'div-gpt-ad-728x90-0')
                     .defineSlot('/6747/saltwatertv', [300, 250], 'div-gpt-ad-300x250-0')
                     .defineSlot('/6747/saltwatertv', [300, 250], 'div-gpt-ad-300x250-1')
                     .defineSlot('/6747/saltwatertv', [320, 250], 'div-gpt-ad-320x250-0')
                     .defineSlot('/6747/saltwatertv', [640, 480], 'div-gpt-ad-640x480-0');

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
