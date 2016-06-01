/*eslint no-unused-vars: [2, { "varsIgnorePattern": "[Popup|Slick]" }]*/

import { config }                from './index.config';
import { routerConfig }          from './index.route';
import { runBlock }              from './index.run';

import { Utils }                 from '../app/components/utils/utils.factory';
import { TimerFilter }           from '../app/components/utils/timer.filter';
import { EllipsesFilter }        from '../app/components/utils/ellipses.filter';
import { MainController }        from '../app/main/main.controller';
import { LoginController }       from '../app/login/login.controller';
import { CategoriesController }  from '../app/categories/categories.controller';
import { CategoryController }    from '../app/category/category.controller';
import { AssetController }       from '../app/asset/asset.controller';
import { SeriesController }      from '../app/series/series.controller';
import { SerieController }       from '../app/serie/serie.controller';
import { SerieDetailController}  from '../app/serie/serie_detail.controller';
import { PageController}         from '../app/pages/page.controller';
import { TrendingController}     from '../app/trending/trending.controller';

import { ApiService }            from '../app/components/api/api.service';
import { PlayerService }         from '../app/components/player/player.service';
import { MetaService }           from '../app/components/metaService/meta.service';
import { SocialService }         from '../app/components/socialService/social.service';

import { SessionProvider }       from '../app/components/session/session.provider';
//import { ConstantsProvider }     from '../app/components/constants/constants.provider';
import configFile                from '../app/components/constants/configfile.js';

import { CategoriesDirective }   from '../app/components/categories/categories.directive';
import { CategoriesX2Directive } from '../app/components/categories/categories_x2.directive';
import { SeriesDirective }       from '../app/series/series.directive';
import { AssetDirective }        from '../app/components/asset/asset.directive';
import { BillboardAdDirective }  from '../app/components/ad/billboardad.directive';
import { PlayerDirective }       from '../app/components/player/player.directive';
import { SliderDirective }       from '../app/components/slider/slider.directive';
import { SeasonDirective }       from '../app/serie/season.directive';
import { SearchDirective }       from '../app/components/search/search.directive';
import { SearchResultDirective } from '../app/components/search/search_result.directive';
import { SearchResultsDirective } from '../app/components/search/search_results.directive';

import { Popup }                 from '../app/components/popup/popup';
import { PopupDirective }        from '../app/components/popup/cmsPopup.directive';
import { Slick }                 from '../app/components/angular-slick/angular-slick';
import { AngularResponsive }     from '../app/components/angular-responsive/responsive-directive';
import { ResponsiveDirectiveProvider,
         arMobileDirective,
         arTabletDirective,
         arDesktopDirective,
         arResponsiveDirective }  from '../app/components/angular-responsive/responsive';

angular.module('appcmsClient', [
'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages',
'ngAria', 'ui.router', 'ui.bootstrap', 'ng-token-auth',
'angularEffDrop', 'slick', 'ngDfp', 'angular-responsive',
'pegasusCms.config'
])
  .provider('session',                SessionProvider)
  //.provider('constants',              ConstantsProvider)
  .provider('responsiveHelper',       ResponsiveDirectiveProvider)

  .config(config)
  .config(routerConfig)
  .run(runBlock)

  .service('apiService',              ApiService)
  .service('playerService',           PlayerService)
  .service('metaService',             MetaService)
  .service('socialService',           SocialService)
  .factory('utils',                   () => new Utils())
  .filter('timerFilter',              TimerFilter)
  .filter('ellipsesFilter',           EllipsesFilter)

  .controller('MainController',         MainController)
  .controller('LoginController',        LoginController)
  .controller('CategoriesController',   CategoriesController)
  .controller('CategoryController',     CategoryController)
  .controller('AssetController',        AssetController)
  .controller('SeriesController',       SeriesController)
  .controller('SerieController',        SerieController)
  .controller('SerieDetailController',  SerieDetailController)
  .controller('PageController',         PageController)
  .controller('TrendingController',     TrendingController)

  .directive('arMobile',                arMobileDirective)
  .directive('arTablet',                arTabletDirective)
  .directive('arDesktop',               arDesktopDirective)
  .directive('arResponsive',            arResponsiveDirective)

  .directive('cmsCategory',           CategoriesDirective)
  .directive('cmsCategoryX2',         CategoriesX2Directive)
  .directive('cmsSeries',             SeriesDirective)
  .directive('cmsAsset',              AssetDirective)
  .directive('cmsPopup',              PopupDirective)
  .directive('cmsBillboardAd',        BillboardAdDirective)
  .directive('cmsPlayer',             PlayerDirective)
  .directive('cmsSlider',             SliderDirective)
  .directive('cmsSeason',             SeasonDirective)
  .directive('cmsSearch',             SearchDirective)
  .directive('cmsSearchResult',       SearchResultDirective)
  .directive('cmsSearchResults',      SearchResultsDirective)
  ;
