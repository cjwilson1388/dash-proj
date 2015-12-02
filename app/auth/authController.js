(function() {

  'use strict';

  angular
    .module('brApp')
    .controller('AuthController', AuthController);

  function AuthController(Auth, User, $state, $scope) {

    var vm = this;

    vm.createUser = createUser;
    vm.login = login;
    vm.loggedInUser;

    function createUser() {

      // If there is already a user logged in,
      // log them out before proceeding
      Auth.$unauth();

      Auth.$createUser({
        email: vm.email,
        password: vm.password,
        office: vm.office,
        username: vm.email,
        firstName: vm.firstName,
        lastName: vm.lastName
      }).then(function(userData) {
        saveUser(userData);
        login();
      }).catch(function(error) {
        vm.error = error;
      });
    }

    function saveUser(userData) {

      var user = User.newUserRef(userData);
      user.username = vm.email;
      user.email = vm.email;
      user.office = vm.office;
      user.firstName = vm.firstName;
      user.lastName = vm.lastName;


      user.$save().then(function(success) {
       vm.username = null;
       vm.email = null;
       vm.password = null;
       vm.office = null;
       vm.firstName = null;
       vm.lastName = null;
        $state.go('status');
      }, function(error) {
        console.log("there was an error! " + error);
      });
    }

    function login() {

      Auth.$authWithPassword({
        email: vm.email,
        password: vm.password
      }).then(function(data) {
        vm.email = null;
        vm.password = null;
        $state.go('status');
      }).catch(function(error) {
        console.log(error);
      });
    }

    $scope.offices = [
          "Salt Lake City",
          "San Fransisco",
          "Farmington",
          "Provo",
          "Online"
      ];

  }



})();
