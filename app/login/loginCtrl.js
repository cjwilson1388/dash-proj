var app = angular.module('brApp')
  .controller('loginCtrl', function($scope, $firebaseAuth) {
    $scope.callback = function(player) {
        $scope.pauseVideo = function() {
            player.pauseVideo();
        };
        $scope.playVideo = function() {
            player.playVideo();
        };
    };
    var ref = new Firebase("https://bandr.firebaseio.com");
      $scope.auth = $firebaseAuth(ref);

});

/*

var ref = new Firebase("https://docs-sandbox.firebaseio.com");
   auth = $firebaseAuth(ref);

   $scope.login = function() {
     $scope.authData = null;
     $scope.error = null;
 $rootScope.$on('$firebaseSimpleLogin:login', function (e, authUser) {
    var ref = new Firebase(FIREBASE_URL + '/users/' + authUser.uid);
    var user = $firebase(ref).$asObject();

    user.$loaded().then(function() {
      $rootScope.currentUser = user;
    });

    $location.path('/meetings');
  });


  var ref = new Firebase("aa");
  ref.authWithOAuthPopup("google", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });



*/
