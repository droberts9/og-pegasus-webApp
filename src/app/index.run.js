export function runBlock ($log, $anchorScroll, $window, $document, $timeout, DoubleClick) {
  'ngInject';

  // $timeout(()=>{
  //   if (angular.element('#xavsacxyi').length == 0) {
  //     var block = angular.element('#adblock');
  //     block.removeClass('hide');
  //   }
  // }, 2000);

  // hack to scroll to top when navigating to new URLS but not back/forward
  var wrap = function(method) {
    var orig = $window.window.history[method];
    $window.window.history[method] = function() {
      var retval = orig.apply(this, Array.prototype.slice.call(arguments));
      $anchorScroll();
      return retval;
    };
  };
  wrap('pushState');
  wrap('replaceState');

  DoubleClick.getSlot('div-gpt-ad-970x250-0').then(() => {
    if ($window.googletag) {
      $window.googletag.cmd.push(function() {
        $window.googletag.defineOutOfPageSlot('/6747/saltwatertv', 'div-gpt-ad-intert-0').addService($window.googletag.pubads());
      });
    }
  });

  if (angular.isDefined($window.FastClick)) {
    $window.FastClick.attach($document.body);
  }

}
