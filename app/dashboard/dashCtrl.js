(function() {

  'use strict';

  angular
    .module('brApp')
    .controller('DashCtrl', DashCtrl)
    function DashCtrl($scope, $mdSidenav) {
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  }
})();
