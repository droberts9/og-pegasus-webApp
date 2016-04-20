/* global malarkey:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CategoriesController } from './categories/categories.controller';
import { CategoryController } from './category/category.controller';
import { SeriesController } from './series/series.controller';
import { SerieController } from './serie/serie.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { ApiService } from '../app/components/api/api.service'
import { SessionProvider } from '../app/components/session/session.provider';
import { ConstantsProvider } from '../app/components/constants/constants.provider';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { CategoryDirective } from '../app/categories/categories.directive';
import { SeriesDirective } from '../app/series/series.directive';
import { AssetDirective } from '../app/components/asset/asset.directive';

import { LoginController } from './login/login.controller';

angular.module('appcmsClient', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'ng-token-auth'])
  .constant('malarkey', malarkey)
  .provider('session', SessionProvider)
  .provider('constants', ConstantsProvider)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('apiService', ApiService)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('CategoriesController', CategoriesController)
  .controller('CategoryController', CategoryController)
  .controller('SeriesController', SeriesController)
  .controller('SerieController', SerieController)
  .directive('cmsCategory', CategoryDirective.directiveFactory)
  .directive('cmsSeries', SeriesDirective.directiveFactory)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('cmsAsset', AssetDirective)
  ;

