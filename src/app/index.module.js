/* global malarkey:false */
/*eslint no-unused-vars: [2, { "varsIgnorePattern": "rtPopup" }]*/

import { config }               from './index.config';
import { routerConfig }         from './index.route';
import { runBlock }             from './index.run';

import { MainController }       from './main/main.controller';
import { LoginController }      from './login/login.controller';
import { CategoriesController } from './categories/categories.controller';
import { CategoryController }   from './category/category.controller';

import { ApiService }           from '../app/components/api/api.service'

import { SessionProvider }      from '../app/components/session/session.provider';
import { ConstantsProvider }    from '../app/components/constants/constants.provider';

import { CategoryDirective }    from '../app/categories/categories.directive';
import { SeriesDirective }      from '../app/series/series.directive';
import { AssetDirective }       from '../app/components/asset/asset.directive';

import { rtPopup }              from '../app/components/popup/rt-popup.js';


angular.module('appcmsClient', [
'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages',
'ngAria', 'ui.router', 'ui.bootstrap', 'ng-token-auth',
'rt.popup'
])
  .constant('malarkey',               malarkey)
  .provider('session',                SessionProvider)
  .provider('constants',              ConstantsProvider)

  .config(config)
  .config(routerConfig)
  .run(runBlock)

  .service('apiService',              ApiService)
  .controller('MainController',       MainController)
  .controller('LoginController',      LoginController)
  .controller('CategoriesController', CategoriesController)
  .controller('CategoryController',   CategoryController)
  .directive('cmsCategory',           CategoryDirective.directiveFactory)
  .directive('cmsSeries',             SeriesDirective.directiveFactory)
  .directive('cmsAsset',              AssetDirective)
  ;

