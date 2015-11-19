
/* may be unnecessary */
var app = angular.module('brApp');
  app.service('authService', ['firebase', function(firebase) {
    var ref = new Firebase("https://bandr.firebaseio.com");
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully:", authData);
      }
    });
  }]);
