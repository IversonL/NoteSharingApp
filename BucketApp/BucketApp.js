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

  $scope.imgpageFunc = function(){
    $location.path('/imgpage');

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
  $scope.click= function(showitem){
    $scope.showItem = showItem;
};
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

  $scope.imgHolder = [ 
	  {image: "https://pbs.twimg.com/media/CMYegi-VAAAARkE.jpg",
	  likes: 9,
	  dislikes: 0,
	  showLiked: this.likes,
	  total: this.likes,
	  ratio: 0}, 
	  {image: "http://i.makeagif.com/media/5-07-2014/cRZAPi.gif",
	  likes: 7,
	  dislikes: 0,
	  showLiked: this.likes,
	  total: this.likes,
	  ratio: 0}
  ];

  $scope.likeStatus = function(img){
	  img.likes = img.likes + 1;
	  img.showLiked = img.likes - img.dislikes
	  img.total = img.likes + img.dislikes;
  }

  $scope.dislikeStatus = function(img){
	  img.dislikes = img.dislikes + 1;
	  img.showLiked = img.likes - img.dislikes
	  img.total = img.likes + img.dislikes;
  }

  $scope.setTotal = function(img) {
	  img.ratio = ((img.likes / img.total) * 100).toFixed(2);
  }
}
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: "classNotes.html"
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
