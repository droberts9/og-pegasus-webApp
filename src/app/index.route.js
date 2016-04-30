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
                      .catch( () =>{ $state.go('login'); })
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
        "": {
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
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
            categories: function(apiService) {
              'ngInject';
              return apiService.getCategory('categories')
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
              return apiService.getCategory($stateParams.slug)
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
              return apiService.getCategory($stateParams.slug)
            },
            asset: function(apiService, $stateParams) {
              return apiService.getAsset($stateParams.asset)
            }
          }
        }
      }
    })
  ;

  $urlRouterProvider.otherwise('/');
}
