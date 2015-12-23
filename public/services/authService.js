angular.module('authModule',[''])
	.service('Auth', function($rootScope) {	

		this.isLoggedIn = function() {
			return $rootScope.loggedInStatus   
		}

		this.currentUser = function(user) {
			return $rootScope.user;
		}
	});