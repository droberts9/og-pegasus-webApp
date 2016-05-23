export function runBlock ($log, $anchorScroll, $window, DoubleClick) {
  'ngInject';

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
    $window.googletag.cmd.push(function() {
      $window.googletag.defineOutOfPageSlot('/6747/saltwatertv', 'div-gpt-ad-intert-0').addService(googletag.pubads());
    });
  });


  $log.debug('runBlock end');
}
