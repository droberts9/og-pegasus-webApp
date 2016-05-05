export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('home', {
      abstract: true,
      views: {
        header: {
          templateUrl: 'app/main/header.html'
        },
        "": {
          auth: function($auth, $state, $log) {
            return $auth.validateUser()
                      .then((rsp) => { $log.info('logged user', rsp) })
                      .catch( () =>{ $state.go('login'); });
          }
        },
        footer: {
          templateUrl: 'app/main/footer.html'
        }
      }
    })
    .state('home.main', {
      url: '/',
      views: {
        "@": {
          templateUrl: 'app/categories/categories.html',
          controller: 'CategoriesController',
          controllerAs: 'vm',
          resolve: {
            series: function(apiService) {
              return apiService.getSeries();
            },
            featured: function(apiService) {
              'ngInject';
              return apiService.getSeriesFeatured()
            }
          }
        }
      }
    })
    .state('home.categories', {
      url: '/channels',
      views: {
        "@": {
          templateUrl: 'app/categories/categories.html',
          controller: 'CategoriesController',
          controllerAs: 'vm',
          resolve: {
            series: function(apiService) {
              return apiService.getSeries();
            },
            featured: function(apiService) {
              'ngInject';
              return apiService.getSeriesFeatured()
            }
          }
        }
      }
    })
    .state('home.category', {
      url: '/channels/:slug',
      views: {
        "@": {
          templateUrl: 'app/category/category.html',
          controller: 'CategoryController',
          controllerAs: 'vm',
          resolve: {
            category: function(apiService, $stateParams) {
              return apiService.getCategory($stateParams.slug);
            }
          }
        }
      }
    })
    .state('home.asset', {
      url: '/channels/:slug/:asset',
      views: {
        "@": {
          templateUrl: 'app/asset/asset.html',
          controller: 'AssetController',
          controllerAs: 'vm',
          resolve: {
            category: function(apiService, $stateParams) {
              return apiService.getCategory($stateParams.slug);
            },
            asset: function(apiService, $stateParams) {
              return apiService.getAsset($stateParams.asset);
            }
          }
        }
      }
    })
    .state('home.series', {
      url: '/series',
      views:{
        "@": {
          templateUrl: 'app/series/series.html',
          controller: 'SeriesController',
          controllerAs: 'vm',
          resolve: {
            series: function(apiService) {
              return apiService.getSeries();
            }
          }
        }
      }
    })
    .state('home.serie', {
      url: '/series/:slug',
      views: {
        "@": {
          templateUrl: 'app/serie/serie.html',
          controller: 'SerieController',
          controllerAs: 'vm',
          resolve: {
            serie: function(apiService, $stateParams) {
              return apiService.getSerie($stateParams.slug);
            },
            seasons: function(apiService, $stateParams) {
              return apiService.getSeasons($stateParams.slug);
            }
          }
        }
      }
    })
    .state('home.serie_show', {
      url: '/series/:serie/:season/:show',
      views: {
        "@": {
          templateUrl: 'app/serie/serie_detail.html',
          controller: 'SerieDetailController',
          controllerAs: 'vm',
          resolve: {
            episode: function(apiService, $stateParams) {
              return apiService.getEpisode($stateParams.serie, $stateParams.season, $stateParams.show);
            },
            season: function(apiService, $stateParams) {
              return apiService.getSeason($stateParams.serie, $stateParams.season);
            }
          }
        }
      }
    })
    .state('home.pages', {
      url: '/page/:slug',
      views: {
        "@": {
          templateUrl: 'app/pages/page.html',
          controller: 'PageController',
          controllerAs: 'vm',
          resolve: {
            page: function(apiService, $stateParams) {
              return apiService.getPage($stateParams.slug);
            }
          }
        }
      }
    })
  ;

  $urlRouterProvider.otherwise('/');
}
