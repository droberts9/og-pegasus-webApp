/*eslint no-unused-vars: [2, { "varsIgnorePattern": "[Popup|Slick]" }]*/

import { config }                from './index.config';
import { routerConfig }          from './index.route';
import { runBlock }              from './index.run';

import { Utils }                 from '../app/components/utils/utils.factory';
import { TimerFilter }           from '../app/components/utils/timer.filter';
import { MainController }        from '../app/main/main.controller';
import { LoginController }       from '../app/login/login.controller';
import { CategoriesController }  from '../app/categories/categories.controller';
import { CategoryController }    from '../app/category/category.controller';
import { AssetController }       from '../app/asset/asset.controller';

import { ApiService }            from '../app/components/api/api.service'
import { PlayerService }         from '../app/components/player/player.service'

import { SessionProvider }       from '../app/components/session/session.provider';
import { ConstantsProvider }     from '../app/components/constants/constants.provider';

import { CategoriesDirective }   from '../app/categories/categories.directive';
import { CategoriesX2Directive } from '../app/categories/categories_x2.directive';
import { SeriesDirective }       from '../app/series/series.directive';
import { AssetDirective }        from '../app/components/asset/asset.directive';
import { BillboardAdDirective }  from '../app/components/ad/billboardad.directive';
import { PlayerDirective }       from '../app/components/player/player.directive';
import { SliderDirective }       from '../app/components/slider/slider.directive';

import { Popup }                 from '../app/components/popup/popup';
import { PopupDirective }        from '../app/components/popup/cmsPopup.directive'
import { Slick }                 from '../app/components/angular-slick/angular-slick';


angular.module('appcmsClient', [
'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages',
'ngAria', 'ui.router', 'ui.bootstrap', 'ng-token-auth',
'angularEffDrop', 'slick'
])
  .provider('session',                SessionProvider)
  .provider('constants',              ConstantsProvider)

  .config(config)
  .config(routerConfig)
  .run(runBlock)

  .service('apiService',              ApiService)
  .service('playerService',           PlayerService)
  .factory('utils',                   () => new Utils())
  .filter('timerFilter',              TimerFilter)
  .controller('MainController',       MainController)
  .controller('LoginController',      LoginController)
  .controller('CategoriesController', CategoriesController)
  .controller('CategoryController',   CategoryController)
  .controller('AssetController',      AssetController)
  .directive('cmsCategory',           CategoriesDirective)
  .directive('cmsCategoryX2',         CategoriesX2Directive)
  .directive('cmsSeries',             SeriesDirective.directiveFactory)
  .directive('cmsAsset',              AssetDirective)
  .directive('cmsPopup',              PopupDirective)
  .directive('cmsBillboardAd',        BillboardAdDirective)
  .directive('cmsPlayer',             PlayerDirective)
  .directive('cmsSlider',             SliderDirective)
  ;

