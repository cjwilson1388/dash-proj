//app.js

(function() {

  'use strict';

  angular
    .module('brApp', ['firebase', 'ngMaterial', 'angular-md5', 'ui.router', 'angularVideoBg', 'angularVideoBg', 'ngMdIcons'])
    .config(function($stateProvider, $urlRouterProvider) {

    // If a route other than status is requested,
    // go to the auth route
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'AuthController as auth'
      })
      .state('status', {
        url: '/status',
        templateUrl: 'app/status/statusView.html',
        controller: 'StatusController as status'
      })
      .state('addUser', {
        url: '/addUser',
        templateUrl: 'app/login/createUser.html',
        controller: 'AuthController as auth'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashTmpl.html',
        controller: 'DashCtrl as dashboard'
      })
    })
    .run(function($rootScope, $state, User) {

      // Listen for changes to the state and run the code
      // in the callback when the change happens
      $rootScope.$on('$stateChangeStart', function() {

        // Use the User service to get the currently
        // logged-in user from local storage
        var loggedInUser = User.getLoggedInUser();

        // Check that we actually have a logged-in user
        // saved in local storage
        if(loggedInUser) {

          // Use the getUserData method on the User service
          // to grab the data from the /users endpoint in
          // Firebase for the logged-in user
          $rootScope.loggedInUserData = User.getUserData(loggedInUser.uid);
        }
      });
    });

})();
