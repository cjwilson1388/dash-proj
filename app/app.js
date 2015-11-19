var app = angular.module('brApp', [
  'ngMaterial',
  'ui.router',
  'firebase',
  'angularVideoBg'
])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        template: 'home'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
      });
}]);
