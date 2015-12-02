(function() {

  'use strict';

  angular
    .module('brApp')
    .factory('Dashboard', DashService);

  function DashService($firebaseArray) {
    var ref = new Firebase("https://bandr.firebaseio.com/status");
    return $firebaseArray(ref);
  }

})();
