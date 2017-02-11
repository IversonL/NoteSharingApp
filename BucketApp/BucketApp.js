var app = angular.module('AngularUIBucketApp', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui",
    "firebase"
]);

app.controller('MainController', ['$scope','$firebaseSimpleLogin','$location',
    function($scope,$firebaseSimpleLogin,$location) {
    	counter = 0
	$scope.pay = function() {
    	$location.path('/userPay');       // redirect to home page after logout
	}

    $scope.userHome = function() {
    	$location.path('/userHome');    
	}
	$scope.signIn = function() {
		$location.path('/signIn');
	}
	$scope.signUp = function() {
		$location.path('/signUp');
	}
	$scope.classNotes = function() {
		$location.path('/classNotes');
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
	$scope.numfuck = function() {
		counter += 1;
		window.alert(counter);
	}
	$scope.modal = function(){
		$scope.listObject = event.target.src;
		modal = document.getElementById('modal');
		modal.style.display = "block";
	}
	$scope.modalclose = function(){
		modal.style.display = "none";
	}
}
]);

app.config(function($routeProvider, $locationProvider) {
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
});
