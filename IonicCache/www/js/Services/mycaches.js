angular.module('cache.services')
	.factory('mycaches', [
		'$cacheFactory',
		function($cacheFactory){
			return {
				cache: function () {
					return $cacheFactory.get('UserCache') != null ? 
								$cacheFactory.get('UserCache') :
					 			$cacheFactory('UserCache');
				}
			}
	}]);


/*
			function mycacheFactory() {
                // data is always undefined during navegation and F5
                var cache = myCache.cache();
                console.log(cache);
                var data = cache.get("usersrandom");
                console.log(data);
                if(!data) {
                    userService.getUsers().then(function(users){                
                        vm.users = users;
                        myCache.cache().put("usersrandom",users);
                    });
                }
            }
            myCacheRequest();
*/	