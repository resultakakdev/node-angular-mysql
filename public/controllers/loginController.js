angular.module('myApp')
	.controller('loginController',function($scope,User){
		console.log("$scope:",$scope);
		$scope.login = function(){
			console.log('$scope.user:',$scope.user);
			User.save($scope.user);
		}
	})