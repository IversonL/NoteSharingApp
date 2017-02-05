var app = angular.module('AngularUIBucketApp', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui",
    "firebase"
]);

app.controller('MainController', ['$scope','$firebaseSimpleLogin','$location',
    function($scope,$firebaseSimpleLogin,$location) {

        var ref = new Firebase("https://burning-fire-1723.firebaseio.com");
        var auth = $firebaseSimpleLogin(ref);

        // Initialized the user object
        $scope.user = {
            username: "",
            password: ""
        };

	$scope.logout = function() {
    $scope.loggedIn = false;   // to toggle display of SignUp/Logout
    $scope.user = {            // re init the user object
        username: "",
        password: ""
    };
    $location.path('/');       // redirect to home page after logout
}

  $scope.scrollPageFunc = function() {
    $location.path('/scrollPage');       // redirect to home page after logout
  }



    }
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "userHome.html"
    });
    $routeProvider.when('/userHome', {
    templateUrl: 'userHome.html'
});
    $routeProvider.when('/scrollPage', {
    templateUrl: 'scrollPage.html'
    });
});
