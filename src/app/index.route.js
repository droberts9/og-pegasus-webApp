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
        auth: function($auth, $state) {
          return $auth.validateUser()
          .then((rsp) => { /* login ok */  })
          .catch( (rsp) =>{ $state.go('login'); })
        }
      }
    }).
    state('secure.categories', {
      url: '/categories',
      templateUrl: 'app/categories/categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categories'
    })

  ;

  $urlRouterProvider.otherwise('/');
}
