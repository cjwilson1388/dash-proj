// components/user/userService.js

(function() {

  'use strict';

  angular
    .module('brApp')
    .factory('User', UserService);

  function UserService($firebaseObject) {

    function newUserRef(user) {
      var ref = new Firebase("https://bandr.firebaseio.com/users/" + user.uid);
      return $firebaseObject(ref);
    }

    function getUserData(user) {
      var ref = new Firebase("https://bandr.firebaseio.com/users/" + user);
      return $firebaseObject(ref);
    }

    function getLoggedInUser() {
      var user = localStorage.getItem('firebase:session::bandr');
      if(user) {
        return JSON.parse(user);
      }
    }

    return {
      newUserRef: newUserRef,
      getUserData: getUserData,
      getLoggedInUser: getLoggedInUser
    }

  }

})();
