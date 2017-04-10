angular.module('cache.services')
	.factory('myerrors', [
		'$rootScope', 
		function($rootScope){
			return {
				catch: function(message) {
					return function(reason) {
						$rootScope.addError({message: message, reason: reason})
					};
				}
			}
	}]);