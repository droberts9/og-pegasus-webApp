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
      url: '/secure',
      abstract: true,
      template: '<ui-view />',
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    }).
    state('secure.categories', {
      url: '/categories',
      templateUrl: 'app/categories/index.jade',
      controller: 'CategoriesController',
      controllerAs: 'categories'
    })

  ;

  $urlRouterProvider.otherwise('/');
}
