var app = angular.module('AngularUIBucketApp', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui",
    "firebase"
]);

app.controller('MainController', ['$scope','$firebaseSimpleLogin','$location',
    function($scope,$firebaseSimpleLogin,$location) {

    // Changes path url
  	$scope.pay = function() {
      // redirect to home page after logout
      $location.path('/userPay');
  	}
    $scope.userHome = function() {
      // Redirects to home page
      $location.path('/userHome');
  	}
  	$scope.signIn = function() {
      // Redirects to sign-in page
  		$location.path('/signIn');
  	}
  	$scope.signUp = function() {
      // Redirects to sign-up page
  		$location.path('/signUp');
  	}
  	$scope.classNotes = function() {
      // Redirects to the class notes page
  		$location.path('/classNotes');
  	}
    $scope.options = function() {
      // Redirects to the options page
  		$location.path('/options');
  	}

  	// Opens up the image page
  	// $scope.modal = function(){
  	// // Get the modal
  	// 	$scope.listObject = event.target.src;
  	// 	$scope.modal = document.getElementById('modal');
  	// // Displays the modal
  	// 	$scope.modal.style.display = "block";
  	// }
  	// // Closes the modal
  	// $scope.modalclose = function(){
  	// 	modal.style.display = "none";
  	// }
  	$scope.modal = function(){
  		$scope.listObject = event.target.src;
  		modal = document.getElementById('modal');
  		modal.style.display = "block";
  	}
  	$scope.modalclose = function(){
  		modal.style.display = "none";
  	}

    // Array that holds all the images uploaded
    $scope.imgArray = [
      'https://pbs.twimg.com/profile_images/770467680012890112/kSz1jtnn.jpg',
      'http://vignette4.wikia.nocookie.net/finalfantasy/images/1/19/Kingdom_Hearts_Characters.jpg/revision/latest?cb=20130808121919'
    ];
}]);

app.config(function($routeProvider, $locationProvider) {
    // Routes to specific html page and loads it into app
    $routeProvider.when('/', {
        templateUrl: "signIn.html"
    });
    $routeProvider.when('/userHome', {
    templateUrl: 'classNotes.html'
	});
    $routeProvider.when('/userPay', {
    templateUrl: 'userPay.html'
    });
    $routeProvider.when('/signUp', {
    templateUrl: 'signUp.html'
    });
    $routeProvider.when('/signIn', {
	templateUrl: "signIn.html"
    });
    $routeProvider.when('/classNotes', {
	templateUrl: "classNotes.html"
    });
    $routeProvider.when('/imgpage', {
	templateUrl: "imgpage.html"
    });
    $routeProvider.when('/options', {
	templateUrl: "options.html"
    });
});
