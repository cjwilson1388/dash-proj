(function() {

  'use strict';

  angular
    .module('brApp')
    .factory('Status', StatusService);

  function StatusService($firebaseArray) {
    var ref = new Firebase("https://bandr.firebaseio.com/status");
    return $firebaseArray(ref);
  }

})();
