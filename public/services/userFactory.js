angular.module('UserAPI',['ngResource'])
	.factory('User', function($resource) {
		return $resource('/api/user/:id',{ id: '@_id'},{
			login:{
				url: '/api/user/login',
				method:'POST'

			}
		}); // Note the full endpoint address
	});