angular.module('authService',['ngCookies'])
	.service('Auth', function($rootScope,$cookies) {	

		this.isLoggedIn = function() {
			return ($cookies.get('user')!=="")   
		}

		this.currentUser = function(user) {
			return $cookies.get('user');
		}
		this.setCookie = function(user){
			$cookies.put('user', user);
		}
	});
	