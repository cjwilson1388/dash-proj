angular.module('brApp')
  .controller('homeCtrl', function($rootScope, $firebaseAuth){
    var ref = new Firebase("https://bandr.firebaseio.com");
    var auth = $firebaseAuth(ref);
    $scope.auth = Auth;
    $rootScope.authData = authData;
  });


////


/*

app.controller("HomeCtrl", ["currentAuth", function(currentAuth) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
}]);

app.controller("AccountCtrl", ["currentAuth", function(currentAuth) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
}]);
*/
