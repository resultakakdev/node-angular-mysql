angular.module('UserAPI',['ngResource'])
	.factory('User', function($resource) {
		return $resource('/api/user/:id'); // Note the full endpoint address
	});