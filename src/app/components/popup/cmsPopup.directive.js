

export function PopupDirective($log, dropWrapper) {
  'ngInject';

  let directive = {
    restrict: 'A',
    scope: {
      elem: '@cmsPopup',
      fn: '=callback',
      tpl: '@template',
      followLink: '=?'
    },
    link: function(scope, elem) {

      scope.followLink = (scope.followLink == true) || (scope.followLink == 'true') || (scope.followLink == undefined) ? true : false;

      let drop = dropWrapper({
        target: elem,
        scope: scope.$parent,
        templateUrl: scope.tpl,
        position: 'right middle',
        constrainToWindow: true,
        constrainToScrollParent: true,
        classes: 'drop-theme-arrows',
        openOn: 'hover',
        remove: true,
        tetherOptions: {}
      });

      scope.drop = drop;
    }
  };


  return directive;

}

