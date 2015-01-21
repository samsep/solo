todoApp = angular.module('todoApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/electronics', {
        templateUrl: '/partials/electronics.html',
        controller: 'electronicsCtrl'
      })
      .when('/household', {
        templateUrl: '/partials/household.html',
        controller: 'houseCtrl'
      })

      // .otherwise({
      //   redirectTo: '/'
      // });
  });
