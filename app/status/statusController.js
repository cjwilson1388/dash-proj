(function() {

  'use strict';

  angular
    .module('brApp')
    .controller('StatusController', StatusController);

  function StatusController($rootScope, Status, md5, Auth) {

    var vm = this;

    vm.addStatus = addStatus;
    vm.deleteStatus = deleteStatus;
    vm.md5 = md5;
    vm.statusData = Status;

    function addStatus() {
      if(vm.statusText) {

        // Add the status data to Firebase
        vm.statusData.$add({
          date: Firebase.ServerValue.TIMESTAMP,
          text: vm.statusText,
          user: {
            username: $rootScope.loggedInUserData.username,
            email: $rootScope.loggedInUserData.email,
            office: $rootScope.loggedInUserData.office
          }
        });
        vm.statusText = '';
      }
    }

    function deleteStatus(status) {

      // Remove the status that was passed in
      // from the views
      vm.statusData.$remove(status);
    }
  }

})();
