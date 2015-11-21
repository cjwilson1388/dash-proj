(function() {
  'use strict';

  angular
    .module('brApp')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth) {
    var ref = new Firebase("https://bandr.firebaseio.com");
    return $firebaseAuth(ref);
  }

})();
