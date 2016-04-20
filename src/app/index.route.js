export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).
    state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    }).
    state('secure', {
      abstract: true,
      template: '<ui-view />',
      resolve: {
        auth: function($auth, $state, $log) {
          return $auth.validateUser()
                    .then((rsp) => { $log.info('logged user', rsp) })
                    .catch( () =>{ $state.go('login'); })
        }
      }
    }).
    state('secure.categories', {
      url: '/categories',
      templateUrl: 'app/categories/categories.html',
      controller: 'CategoriesController',
      controllerAs: 'vm'
    })
    .state('secure.series', {
      url: '/series',
      templateUrl: 'app/series/series.html',
      controller: 'SeriesController',
      controllerAs: 'vm'
    })
    .state('secure.serie', {
      url: '/series/:slug',
      templateUrl: 'app/serie/serie.html',
      controller: 'SerieController',
      controllerAs: 'vm',
      resolve: {
        serie: function(apiService, $stateParams) {
          return apiService.getSerie($stateParams.slug)
        }
      }
    })
  ;

  $urlRouterProvider.otherwise('/');
}
